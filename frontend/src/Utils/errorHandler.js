import i18next from 'i18next';
import { message } from 'antd';
import history from '~/services/history';

const online = navigator.onLine ? true : false;

const showMessage = text => {
  message.error(text);
};

const handleErrorStatus = (response, e422) => {
  const { status } = response;
  if (status === 422) {
    const { errors } = JSON.parse(response.data);
    if (errors && e422) {
      return errors;
    } else {
      showMessage(i18next.t('messages:invalidData'));
    }
  } else if (status === 404) {
    history.push('/404');
  } else if (status === 403) {
    showMessage(i18next.t('messages:unauthorized'));
  } else if (status === 401) {
    showMessage(i18next.t('messages:authError'));
  } else if (status === 500) {
    showMessage(i18next.t('messages:randomError'));
  } else if (status === 406) {
    showMessage(i18next.t('messages:notAcceptable'));
  }

  return {};
};

const errorHandler = (exception, e422 = true) => {
  const { response } = exception;
  if (online) {
    if (response) {
      return handleErrorStatus(response, e422);
    } else if (exception.message === 'Network Error') {
      showMessage(i18next.t('messages:backendOff'));
    } else {
      showMessage(i18next.t('messages:randomError'));
    }
  } else {
    showMessage(i18next.t('messages:offline'));
  }

  return {};
};

export default errorHandler;
