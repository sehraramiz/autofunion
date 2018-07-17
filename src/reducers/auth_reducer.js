import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGN_OUT_USER
} from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
  error: '',
  user: {},
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, authenticated: true }
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload };
    case SIGN_OUT_USER:
      return { ...state, authenticated: false, error: '' };
    // action that dispaches from redux-persist
    // and has the previous state in it's payload
    case 'persist/REHYDRATE':
      return action.payload.auth;
    default:
      return { ...state };
  }
}
