import { atom, atomWithDefault } from '~shared/lib/atom-state';
import { LocalStorageCache } from '~shared/lib/cache';
import { User } from '~entities/user';

import { getPhoto } from '../api';

import { Photo } from './types';
import { defaultAvatar } from './const';

const _PHOTO_FETCH_TIME = 1 * 24 * 60; //24 hour

export const photoAtom = atomWithDefault<Photo | null>((_get) => null);

export const setPhotoAtom = atom<Photo | null, User, Promise<void>>(
  (get) => get(photoAtom),
  async (_get, set, { exp }) => {
    const storageName = 'photo-' + exp;
    const localPlan = LocalStorageCache.get(storageName);

    let data = localPlan;

    if (!data) {
      const response = await getPhoto();
      data = response.data;
      LocalStorageCache.set(storageName, data, _PHOTO_FETCH_TIME);
    }

    if (data?.error) {
      set(photoAtom, defaultAvatar);
    } else if (data[0] && data[0]?.photo) {
      const photo = data[0]?.photo;
      // const buffer = Buffer.from(photo.data);
      // const base64String = buffer.toString('base64');
      const base64String = btoa(
        new Uint8Array(photo.data).reduce((datab, byte) => datab + String.fromCharCode(byte), '')
      );

      localStorage.setItem('image', JSON.stringify(base64String));

      const srcBlob = 'data:image/jpeg;base64,' + base64String;
      set(photoAtom, srcBlob);
    }
  }
);
