import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { getServiceQrList } from '../api';

import { IService } from './types';

export const serviceQrAtom = atomWithDefault<number | null>((_get) => null);
export const serviceQrListAtom = atomWithDefault<IService[] | null>((_get) => null);

export const setServiceQrAtom = atom<number | null, { service: number | null }, Promise<void>>(
  (get) => get(serviceQrAtom),
  async (_get, set, { service }) => {
    set(serviceQrAtom, service);
  }
);

export const setServiceQrListAtom = atom<IService[] | null, undefined, Promise<void>>(
  (get) => get(serviceQrListAtom),
  async (_get, set) => {
    const response = await getServiceQrList();

    if (response.data?.error) {
      set(serviceQrListAtom, []);
    } else if (response.data) {
      set(serviceQrListAtom, response.data);
    }
  }
);
