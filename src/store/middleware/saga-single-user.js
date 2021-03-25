import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import { GET_USER_REQUEST } from '../users/constants';
import { getUserSuccess, getUserError } from '../users/actions';

function* getSingleUser({ payload }) {
  try {
    const singleUser = yield call(api.users.getSingleUser, payload);
    yield put(getUserSuccess(singleUser));
  } catch (e) {
    yield put(getUserError());
  }
}

function* sagaSingleUser() {
  yield takeEvery(GET_USER_REQUEST, getSingleUser);
}

export default sagaSingleUser;
