import axios from 'axios';

import { defaultLocale } from '~shared/lib/l10n';
import { ApiResponseData } from '~shared/api';
import { setAsyncTimeout } from '~shared/lib/utils';

// import { routes } from './routes';
import { ApiUserData } from './types';

export const getUser = async () => {
  let response;

  try {
    response = await axios.post('http://localhost:5000/mms/api/user/check', {
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': defaultLocale,
      },
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};

export const mockGetUser = async () => {
  let result: unknown = null;

  await setAsyncTimeout(() => {
    result = {
      data: {
        authState: {
          type: 1,
          s: 'Стакеева',
          n: 'Чолпон',
          p: 'Аскаровна',
          exp: 1685229785758,
        },
        token: 'token',
        tokenType: 'cookie',
        expiresIn: 59,
      },
    };
  }, 1000);

  return result as ApiResponseData<ApiUserData>;
};
