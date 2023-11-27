import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { getProfile } from '../api';

import { Profile } from './types';

export const profileAtom = atomWithDefault<Profile | null>((_get) => null);

export const setProfileAtom = atom<Profile | null, undefined, Promise<void>>(
  (get) => get(profileAtom),
  async (_get, set) => {
    const response = await getProfile();
    const profile = response.data;
    set(profileAtom, profile);
  }
);
