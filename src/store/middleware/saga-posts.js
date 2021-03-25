import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import { GET_POSTS_REQUEST, GET_POST_REQUEST } from '../posts/constants';
import {
  getPostsSuccess,
  getPostsError,
  getPostSuccess,
  getPostError,
} from '../posts/actions';

function* getPosts() {
  try {
    const posts = yield call(api.posts.getPosts);
    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsError);
  }
}

function* getSinglePost({ payload }) {
  try {
    const singlePost = yield call(api.posts.getSinglePost, payload);
    yield put(getPostSuccess(singlePost));
  } catch (e) {
    yield put(getPostError(e));
  }
}

function* sagaPosts() {
  yield takeEvery(GET_POSTS_REQUEST, getPosts);
  yield takeEvery(GET_POST_REQUEST, getSinglePost);
}

export default sagaPosts;
