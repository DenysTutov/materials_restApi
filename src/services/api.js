import axios from 'axios';

axios.defaults.baseURL = 'https://62cfc3671cc14f8c087ccb80.mockapi.io';

export const getMaterial = async () => {
  const response = await axios.get('/materials');
  return response.data;
};

export const addMaterial = async value => {
  const response = await axios.post('/materials', value);
  return response.data;
};

export const deleteMaterial = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};

export const updateMaterial = async update => {
  const response = await axios.put(`/materials/${update.id}`, update);
  return response.data;
};
