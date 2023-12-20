import { atom } from 'jotai';

export const locAtom = atom('2');

export const formAtom = atom({
  startDate: '',
  endDate: '',
  city: '',
  country: '',
});
