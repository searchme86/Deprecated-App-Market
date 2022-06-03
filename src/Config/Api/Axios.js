import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export default axios.create({
  baseURL: BASE_URL,
});

export const authRequest = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const apiPost = async (method, url, userInfo) => {
  const response = axios({
    method,
    url,
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
    data: JSON.stringify(userInfo),
  });
  return response;
};
