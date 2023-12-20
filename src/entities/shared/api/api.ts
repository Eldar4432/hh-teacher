import { api } from '~shared/api';

export const getRole = async () => {
  let response;

  try {
    response = await api.get('/shared/role');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const getDepartment = async () => {
  let response;

  try {
    response = await api.get('/shared/department');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const getEmployee = async () => {
  let response;

  try {
    response = await api.get('/shared/employee');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const getPost = async () => {
  let response;

  try {
    response = await api.get('/shared/post');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const getBusinessType = async () => {
  let response;

  try {
    response = await api.get('/shared/businessType');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const getBusinessTrip = async () => {
  let response;

  try {
    response = await api.get('/shared/businessTrip');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const getCountry = async () => {
  let response;

  try {
    response = await api.get('/shared/country');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const getRegion = async () => {
  let response;

  try {
    response = await api.get('/shared/region');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};

export const getDistrict = async () => {
  let response;

  try {
    response = await api.get('/shared/district');
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data;
};
