import { useAtomValue } from '~shared/lib/atom-state';

import { wsListAtom } from './atoms';

export const useWsList = () => {
  return useAtomValue(wsListAtom);
};
