import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { serviceQrListAtom, setServiceQrListAtom } from './atoms';

export const useServiceQrList = () => {
  return useAtomValue(serviceQrListAtom);
};

export const useSetServiceQrList = () => {
  return useSetAtom(setServiceQrListAtom);
};

export const useResetServiceQrList = () => {
  return useResetAtom(serviceQrListAtom);
};
