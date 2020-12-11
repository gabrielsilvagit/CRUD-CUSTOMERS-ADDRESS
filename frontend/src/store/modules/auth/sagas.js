import { takeLatest, call, put, all } from 'redux-saga/effects';
import { message } from 'antd';

import api from '~/services/api';
import errorHandler from '~/Utils/errorHandler';
import history from '~/services/history';
import { signInSuccess, signFailure, signOutSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth', {
      email,
      password,
    });

    const { token } = JSON.parse(response.data);
    const user = JSON.parse(response.data);
    delete user.token;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/customers');
  } catch (error) {
    errorHandler(error);
    yield put(signFailure());
  }
}

export function* signOut() {
  try {
    yield call(api.post, 'auth/logout');
  } catch (err) {}

  yield put(signOutSuccess());
  history.push('/');
}

export function* tokenExpired() {
  try {
    yield call(api.post, 'auth/logout');
  } catch {}

  message.success('Sua sessão expirou! Faça o login novamente.');
  history.push('/');
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
  takeLatest('@auth/TOKEN_EXPIRED', tokenExpired),
]);
