import { useAtomValue, useSetAtom } from '~shared/lib/atom-state';

import { setYearAtom, yearAtom } from './atoms';

export const useYear = () => {
  return useAtomValue(yearAtom);
};

export const useSetYear = () => {
  return useSetAtom(setYearAtom);
};
