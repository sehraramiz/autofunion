import axios from 'axios';
import {
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAIL,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAIL,
} from './types';


const URL = 'http://127.0.0.1:8000/api/v1';

export function fetchBoard(history) {
  return async (dispatch) => {
    try {
      const res = await axios.get(URL + '/board/');
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

export function sendMessage({ message, token, tags }) {
  return async (dispatch) => {
    try {
      let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      };
      var data = {
          'text': message,
          'tags': tags,
      }
      const res = await axios.post(URL + '/board/', data, axiosConfig);
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

export function fetchBoardWithTag({ tagId }) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${URL}/tags/${tagId}/messages/`);
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

export function fetchTags() {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${URL}/tags/`);
      dispatch({
        type: FETCH_TAGS_SUCCESS,
        payload: res
      });
    } catch(error) {
      console.log(error);
      dispatch({
        type: FETCH_TAGS_FAIL,
        payload: 'Fetch Tagss Failed'
      });
    }
  };
}
