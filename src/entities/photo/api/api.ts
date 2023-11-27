// import { ApiResponseData, api } from '~shared/api';

// import { routes } from './routes';
// import { ApiPhotoData } from './types';

export const getPhoto = () => {
  let response;

  try {
    // response = api.get<any, ApiResponseData<ApiPhotoData>>(routes.getPhoto());

    response = {
      data: [{ photo: { type: 'Buffer', data: [66, 77, 210, 10] } }],
      message: 'success',
      error: false,
    };
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
