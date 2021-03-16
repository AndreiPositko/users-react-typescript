import { combineReducers } from 'redux';

import users from '../store/users/reducer';
import auth from '../store/auth/reducer';

const rootReducer = combineReducers({
  auth,
  users,
});

export default rootReducer;
