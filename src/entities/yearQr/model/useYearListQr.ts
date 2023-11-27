import { useAtomValue } from '~shared/lib/atom-state';

import { yearQrDefaultAtom, yearQrListAtom } from './atoms';

export const useYearQrList = () => {
  return useAtomValue(yearQrListAtom);
};

export const useDefaultYearQr = () => {
  return useAtomValue(yearQrDefaultAtom);
};
