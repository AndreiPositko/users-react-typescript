import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import { GET_POSTS_REQUEST } from '../posts/constants';
import { getPostsSuccess, getPostsError } from '../posts/actions';

function* getPosts() {
  try {
    const posts = yield call(api.posts.getPosts);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsError);
  }
}

function* sagaPosts() {
  yield takeEvery(GET_POSTS_REQUEST, getPosts);
}

export default sagaPosts;
