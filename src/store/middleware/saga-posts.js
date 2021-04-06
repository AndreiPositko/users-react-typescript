import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import {
  GET_POSTS_REQUEST,
  GET_POST_REQUEST,
  EDIT_POST_REQUEST,
} from '../posts/constants';
import {
  getPostsSuccess,
  getPostsError,
  getPostSuccess,
  getPostError,
  editPostSuccess,
  editPostError,
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

function* editSinglePost({ payload }) {
  try {
    const editSinglePost = yield call(api.posts.editSinglePost, payload);
    yield put(editPostSuccess(editSinglePost));
  } catch (e) {
    yield put(editPostError());
  }
}

function* sagaPosts() {
  yield takeEvery(GET_POSTS_REQUEST, getPosts);
  yield takeEvery(GET_POST_REQUEST, getSinglePost);
  yield takeEvery(EDIT_POST_REQUEST, editSinglePost);
}

export default sagaPosts;
