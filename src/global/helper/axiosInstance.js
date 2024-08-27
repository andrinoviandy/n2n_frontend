import axios from 'axios';
import { getCookies } from './cookie';

const baseApiHub = process.env.REACT_APP_API_URL;
const baseApi = process.env.REACT_APP_BASE_URL;
// const baseApi = process.env.REACT_APP_BASE_URL_LOCAL;
const loginData = getCookies('loginData');

export const apiHub = axios.create({
  baseURL: baseApiHub,
});

export const api = axios.create({
  baseURL: baseApi,
  headers: {
    'Authorization': loginData,
  },
});
