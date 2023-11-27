import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiServiceData } from './types';

export const getServiceQrList = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiServiceData>>(routes.getServiceQrList());
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
