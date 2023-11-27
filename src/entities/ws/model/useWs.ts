import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { defWsAtom, setWsAtom, wsAtom } from './atoms';

export const useWs = () => {
  return useAtomValue(wsAtom);
};

export const useDefWs = () => {
  return useAtomValue(defWsAtom);
};

export const useSetWs = () => {
  return useSetAtom(setWsAtom);
};

export const useResetWs = () => {
  return useResetAtom(wsAtom);
};
