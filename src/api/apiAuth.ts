import axios from 'axios';
import { User } from '../interfaces/interfaces';

const authApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const addNewUser = async () => {
  const { data } = await authApi.post('/users', {
    email: 'email@if.ua',
    password: 'password',
  });
  return data;
};
