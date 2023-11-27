import { useAtomValue, useSetAtom } from '~shared/lib/atom-state';

import { setYearQrAtom, yearQrAtom } from './atoms';

export const useYearQr = () => {
  return useAtomValue(yearQrAtom);
};

export const useSetYearQr = () => {
  return useSetAtom(setYearQrAtom);
};
