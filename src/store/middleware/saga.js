import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import { GET_USERS_REQUEST } from './../users/constants';
import { getUsersSuccess, getUsersError } from '../users/actions';

function* getUsers() {
  try {
    const users = yield call(api.users.getUsers);
    console.log('USERS', users);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError);
  }
}

function* mySaga() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

export default mySaga;
