import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  remember: false,
  email: null,
  password: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/REMEMBER_CREDENTIALS': {
        draft.email = action.payload.email;
        draft.password = action.payload.password;
        draft.remember = action.payload.remember;
        break;
      }
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/TOKEN_EXPIRED':
      case '@auth/SIGN_OUT_SUCCESS': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
