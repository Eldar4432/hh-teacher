import { api } from '~shared/api';

export const getTrips = async () => {
  let response;

  try {
    response = await api.get('/business');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const putBusinessTrip = async (data: any) => {
  let response;

  try {
    response = await api.put('/business', data);
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const deleteBusinessTrip = async (id: any) => {
  let response;

  try {
    response = await api.delete('/business', id);
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};
