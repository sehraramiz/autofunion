import {
  HIDE_ALERT
} from './types';

export function hideAlert() {
  return async (dispatch) => {
    try {
      dispatch({
        type: HIDE_ALERT
      });
    } catch(error) {
      console.log(error);
    }
  };
}
