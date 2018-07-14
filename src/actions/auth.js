import axios from 'axios';
import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR, SIGN_OUT_USER } from './types';


const URL = 'http://127.0.0.1:8000/api/v1/rest-auth';

export function signInAction({ username, email, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/login/`, { username, email, password });

      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/profile');
    } catch(error) {
      console.log(error);
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}

export function signOutAction(history) {
  return async (dispatch) => {
    try {
      dispatch({ type: SIGN_OUT_USER });
      localStorage.setItem('user', null);
      history.push('/');
    } catch(error) {
      console.log(error);
    }
  };
}
