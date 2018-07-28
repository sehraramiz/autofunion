import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAIL,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAIL,
  HIDE_ALERT,
} from '../actions/types';

const INITIAL_STATE = {
  show: false,
  text: '',
  type: '',
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, show: true, text: 'Successfully Logged In!', type: 'success' }
    case LOGIN_USER_FAIL:
      return { ...state, show: true, text: action.payload, type: 'danger' }
    case SIGN_UP_USER_SUCCESS:
      return { ...state, show: true, text: 'Successfully Signed Up!', type: 'success' }
    case SIGN_UP_USER_FAIL:
      return { ...state, show: true, text: action.payload, type: 'danger' }
    case CREATE_MESSAGE_SUCCESS:
      return { ...state, show: true, text: 'Message Created Successfully!', type: 'success' }
    case CREATE_MESSAGE_FAIL:
      return { ...state, show: true, text: action.payload, type: 'danger' }
    case HIDE_ALERT:
      return { ...state, show: false, text: '', type: '' };
    default:
      return { ...state };
  }
}
