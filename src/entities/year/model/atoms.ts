import { atom } from '~shared/lib/atom-state';

import { Year, YearList } from './types';
import { defaultYear, defaultYearLabel, defaultYearList } from './consts';

export const yearDefaultAtom = atom<{ value: Year; label: string }>({
  value: defaultYear,
  label: defaultYearLabel,
});
export const yearAtom = atom<Year>(defaultYear);
export const yearListAtom = atom<YearList>(defaultYearList);

export const setYearAtom = atom<Year, { year: Year }, Promise<void>>(
  (get) => get(yearAtom),
  async (_get, set, { year }) => set(yearAtom, year)
);
