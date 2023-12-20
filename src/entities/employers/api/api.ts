import { api } from '~shared/api';

export const getPersonal = async () => {
  let response;

  try {
    response = await api.get('/personal');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const deleteUser = async (id: any) => {
  let response;

  try {
    response = await api.delete('/personal', { data: { id } });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const createUser = async (data: any) => {
  let response;

  try {
    response = await api.put('/personal', data);
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const updateUser = async (data: any) => {
  let response;

  try {
    response = await api.post('/personal', data);
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};
