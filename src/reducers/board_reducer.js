import {
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAIL,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  board: {},
  tags: {},
  error: '',
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_BOARD_SUCCESS:
      return { ...state, board: action.payload, error: '' };
    case FETCH_BOARD_FAIL:
      return { ...state, error: action.payload };
    case FETCH_TAGS_SUCCESS:
      return { ...state, tags: action.payload, error: '' };
    case FETCH_TAGS_FAIL:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
}
