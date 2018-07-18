import axios from 'axios';
import {
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAIL,
} from './types';


const URL = 'http://127.0.0.1:8000/api/v1/board/';

export function fetchBoard(history) {
  return async (dispatch) => {
    try {
      const res = await axios.get(URL);
      dispatch({
        type: FETCH_BOARD_SUCCESS,
        payload: res
      });
    } catch(error) {
      console.log(error);
      dispatch({
        type: FETCH_BOARD_FAIL,
        payload: 'Fetch Board Failed'
      });
    }
  };
}

export function sendMessage({ message, token }) {
  return async (dispatch) => {
    try {
      let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      };
      var data = {
          'text': message,
      }
      const res = await axios.post(URL, data, axiosConfig);
      // dispatch({
      //   type: FETCH_BOARD_SUCCESS,
      //   payload: res
      // });
      console.log('message sent success');
    } catch(error) {
      console.log(error);
      // dispatch({
      //   type: FETCH_BOARD_FAIL,
      //   payload: 'Fetch Board Failed'
      // });
      console.log('message sent fail ' + error);
    }
  };
}
