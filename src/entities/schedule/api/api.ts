import { api } from '~shared/api';

export const getSchedule = async () => {
  let response;

  try {
    response = await api.get('/schedule');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const putShedule = async (data: any) => {
  let response;

  try {
    response = await api.put('/schedule', data);
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const deleteShedule = async (id: any) => {
  let response;

  try {
    response = await api.delete('/schedule', id);
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};
