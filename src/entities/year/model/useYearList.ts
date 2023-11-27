import { useAtomValue } from '~shared/lib/atom-state';

import { yearDefaultAtom, yearListAtom } from './atoms';

export const useYearList = () => {
  return useAtomValue(yearListAtom);
};

export const useDefaultYear = () => {
  return useAtomValue(yearDefaultAtom);
};
