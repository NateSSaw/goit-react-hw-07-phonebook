import axios from 'axios';

axios.defaults.baseURL = 'https://6442e9d490738aa7c0688490.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts() {
  const { data } = await axios.post('/contacts');
  return data;
}

export async function deleteContacts() {
  const { data } = await axios.get('/contacts/id');
  return data;
}
