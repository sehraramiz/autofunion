import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAIL,
  SIGN_OUT_USER,
} from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
  error: '',
  user: {},
  token: {},
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_USER_SUCCESS:
      const { user, token } = action.payload;
      return { ...state, user, token, authenticated: true }
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload };
    case SIGN_UP_USER_SUCCESS:
      console.log('signup success');
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticated: true
      }
    case SIGN_UP_USER_FAIL:
      console.log('signup fail');
      return { ...state, error: action.payload };
    case SIGN_OUT_USER:
      return { ...state, authenticated: false, error: '' };
    // action that dispaches from redux-persist
    // and has the previous state in it's payload
    case 'persist/REHYDRATE':
      return action.payload === undefined ? { ...state } : action.payload.auth;
    default:
      return { ...state };
  }
}
