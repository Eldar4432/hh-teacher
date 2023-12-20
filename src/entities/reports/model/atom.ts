import { WritableAtom, atom } from 'jotai';

interface ReportAtom {
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  btName: string;
  docName: string;
  organizators: any[];
  krEmployers: any[];
  targets: any[];
  krTargets: any[];
  dayPlan: any[];
  krThoughts: any[];
  krPosition: any[];
  krShow: any[];
  krOffer: any[];
}

export const reportAtom: WritableAtom<ReportAtom, any> = atom({
  startDate: '',
  endDate: '',
  city: '',
  country: '',
  btName: '',
  docName: '',
  organizators: [],
  krEmployers: [],
  targets: [],
  krTargets: [],
  dayPlan: [],
  krThoughts: [],
  krPosition: [],
  krShow: [],
  krOffer: [],
});
