import { combineReducers } from 'redux';

import users from './users/reducer';
import auth from './auth/reducer';
import posts from './posts/reducer';
import photos from './photos/reducer';
import errors from './errors/reducer';

const rootReducer = combineReducers({
  auth,
  users,
  posts,
  photos,
  errors,
});

export default rootReducer;
