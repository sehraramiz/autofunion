import axios from 'axios';
import {
  SIGN_OUT_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './types';


const URL = 'http://127.0.0.1:8000/authentication';

export function signInAction({ username, email, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/token/`, { username, password });
      const { user } = res.data;
      const token = {
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token,
      };
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token }
      });
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
      // history.push('/profile');
    } catch(error) {
      console.log(error);
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: 'Login Failed'
      });
    }
  };
}

export function signOutAction(history) {
  return async (dispatch) => {
    try {
      localStorage.setItem('token', {});
      localStorage.setItem('user', {});
      history.push('/');
      dispatch({ type: SIGN_OUT_USER });
    } catch(error) {
      console.log(error);
    }
  };
}
