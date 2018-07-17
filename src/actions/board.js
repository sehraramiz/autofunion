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
