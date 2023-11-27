import { atom } from '~shared/lib/atom-state';

import { Year, YearList } from './types';
import { defaultYear, defaultYearLabel, defaultYearList } from './consts';

export const yearQrDefaultAtom = atom<{ value: Year; label: string }>({
  value: defaultYear,
  label: defaultYearLabel,
});
export const yearQrAtom = atom<Year>(defaultYear);
export const yearQrListAtom = atom<YearList>(defaultYearList);

export const setYearQrAtom = atom<Year, { year: Year }, Promise<void>>(
  (get) => get(yearQrAtom),
  async (_get, set, { year }) => set(yearQrAtom, year)
);
