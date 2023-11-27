import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { Ws, WsList } from './types';
import { defaultWs, defaultWsList } from './consts';

export const wsAtom = atomWithDefault<Ws | null>((_get) => null);
export const wsListAtom = atom<WsList>(defaultWsList);
export const defWsAtom = atom<Ws>(defaultWs);

export const setWsAtom = atom<Ws | null, { ws: Ws }, Promise<void>>(
  (get) => get(wsAtom),
  async (_get, set, { ws }) => set(wsAtom, ws)
);
