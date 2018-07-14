import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR, SIGN_OUT_USER } from '../actions/types';

export default function(state={}, action) {
  switch(action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case SIGN_OUT_USER:
      return { ...state, authenticated: false, error: '' };
    default:
      return { ...state };
  }
}
