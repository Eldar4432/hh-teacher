import axios from 'axios';

export const getStructure = async () => {
  let response;

  try {
    response = await axios.get('http://localhost:5000/mms/api/department', {
      withCredentials: true,
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response?.data.data;
};
