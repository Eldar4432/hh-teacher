import axios from 'axios';

import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiSignOutResponseData } from './types';

// for example purposes
export const signOut = async () => {
  let response;

  try {
    response = await axios.post('http://localhost:5000/mms/api/user/logout', {
      withCredentials: true,
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
