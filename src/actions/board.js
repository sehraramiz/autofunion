import axios from 'axios';
import {
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAIL,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAIL,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAIL
} from './types';
import { BASE_URL } from '../config';


const URL = `${BASE_URL}/api/v1`;

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
      dispatch({
        type: CREATE_MESSAGE_SUCCESS,
        payload: res
      });
    } catch(error) {
      console.log(error);
      dispatch({
        type: CREATE_MESSAGE_FAIL,
        payload: 'Fetch Board Failed'
      });
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
