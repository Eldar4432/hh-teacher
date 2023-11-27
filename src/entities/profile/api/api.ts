import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiProfileData } from './types';

export const getProfile = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiProfileData>>(routes.getProfile());
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
