import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import boardReducer from './board_reducer';
import alertReducer from './alert_reducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  board: boardReducer,
  alert: alertReducer,
});
