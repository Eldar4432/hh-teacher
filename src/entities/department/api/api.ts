import { api } from '~shared/api';

export const getDepartment = async () => {
  let response;

  try {
    response = await api.get('/department');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const putDepartment = async (data: any) => {
  let response;

  try {
    response = await api.put('/department', data);
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const deleteDepartment = async (id: any) => {
  let response;

  try {
    response = await api.delete('/department', { data: { id } });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const updateDepartment = async (data: any) => {
  let response;

  try {
    response = await api.post('/department', data);
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};
