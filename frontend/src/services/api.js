import axios from 'axios';
import { tokenExpired } from '~/store/modules/auth/actions';
import { store } from '~/store';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

const isAuthTry = (url, method) => {
  return url.indexOf('api/auth') && method === 'post' ? true : false;
};

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { dispatch } = store;
    const { config } = error;
    const status = error.response ? error.response.status : null;
    const { url, method } = config;

    if (status === 401 && !isAuthTry(url, method)) {
      dispatch(tokenExpired());
      return new Promise();
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
