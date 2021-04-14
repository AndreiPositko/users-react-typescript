import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import {
  GET_USERS_REQUEST,
  GET_USER_REQUEST,
  EDIT_USER_REQUEST,
} from '../users/constants';
import {
  getUsersSuccess,
  getUsersError,
  getUserSuccess,
  getUserError,
  editUserSuccess,
  editUserError,
} from '../users/actions';

function* getUsers() {
  try {
    const users = yield call(api.users.getUsers);
    yield put(getUsersSuccess(users.data));
  } catch (e) {
    yield put(getUsersError);
  }
}

function* getSingleUser({ payload }) {
  try {
    const singleUser = yield call(api.users.getSingleUser, payload);
    yield put(getUserSuccess(singleUser.data));
  } catch (e) {
    yield put(getUserError());
  }
}

function* editSingleUser({ payload }) {
  try {
    const editSingleUser = yield call(api.users.editSingleUser, payload);
    yield put(editUserSuccess(editSingleUser.data));
  } catch (e) {
    yield put(editUserError());
  }
}

function* sagaUsers() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
  yield takeEvery(GET_USER_REQUEST, getSingleUser);
  yield takeEvery(EDIT_USER_REQUEST, editSingleUser);
}

export default sagaUsers;
