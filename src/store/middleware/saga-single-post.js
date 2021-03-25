import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import { GET_POST_REQUEST } from '../posts/constants';
import { getPostSuccess, getPostError } from '../posts/actions';

function* getSinglePost({ payload }) {
  try {
    const singlePost = yield call(api.posts.getSinglePost, payload);
    yield put(getPostSuccess(singlePost));
  } catch (e) {
    yield put(getPostError(e));
  }
}

function* sagaSinglePost() {
  yield takeEvery(GET_POST_REQUEST, getSinglePost);
}

export default sagaSinglePost;
