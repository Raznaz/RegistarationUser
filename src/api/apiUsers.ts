import axios from 'axios';

const usersAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export function fetchAllUsers() {
  return usersAPI.get('/users');
}
