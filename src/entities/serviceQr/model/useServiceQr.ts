import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { serviceQrAtom, setServiceQrAtom } from './atoms';

export const useServiceQr = () => {
  return useAtomValue(serviceQrAtom);
};

export const useSetServiceQr = () => {
  return useSetAtom(setServiceQrAtom);
};

export const useResetServiceQr = () => {
  return useResetAtom(serviceQrAtom);
};
