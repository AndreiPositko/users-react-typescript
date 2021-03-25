import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import { GET_USERS_REQUEST, GET_USER_REQUEST } from '../users/constants';
import {
  getUsersSuccess,
  getUsersError,
  getUserSuccess,
  getUserError,
} from '../users/actions';

function* getUsers() {
  try {
    const users = yield call(api.users.getUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError);
  }
}

function* getSingleUser({ payload }) {
  try {
    const singleUser = yield call(api.users.getSingleUser, payload);
    yield put(getUserSuccess(singleUser));
  } catch (e) {
    yield put(getUserError());
  }
}

function* sagaUsers() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
  yield takeEvery(GET_USER_REQUEST, getSingleUser);
}

export default sagaUsers;
