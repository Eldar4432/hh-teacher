import axios from 'axios';

import { ApiResponseData } from '~shared/api';
import { setAsyncTimeout } from '~shared/lib/utils';

// import { routes } from './routes';

import { ApiSignInData, ApiSignInResponseData } from './types';

// for example purposes
export const signIn = async (data: ApiSignInData) => {
  let response;

  try {
    // response = await api.post<any, ApiResponseData<ApiSignInResponseData>>(routes.signIn(), data);
    response = await axios.post('http://localhost:5000/mms/api/user/login', data, {
      withCredentials: true,
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response.data;
  // return api.post<any, ApiResponseData<ApiSignInResponseData>>(routes.signIn(), data);
};

export const mockSignIn = async (_data?: ApiSignInData) => {
  let result: unknown = null;

  await setAsyncTimeout(() => {
    result = {
      data: {
        token: 'token',
        expiresIn: 120,
        type: 'Bearer',
      },
    };
  }, 1000);

  return result as ApiResponseData<ApiSignInResponseData>;
};
