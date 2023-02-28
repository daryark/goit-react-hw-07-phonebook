import axios from 'axios';

axios.defaults.baseURL = 'https://63fcff2a8ef914c555a3c3cc.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  console.log(contact);
  const { data } = await axios.post('/contacts', contact);
  console.log('back from axios', data);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`, id);
  return data;
};
