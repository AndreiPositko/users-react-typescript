import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import {
  GET_PHOTOS_REQUEST,
  GET_PHOTO_REQUEST,
  EDIT_PHOTO_REQUEST,
} from '../photos/constants';

import {
  getPhotosSuccess,
  getPhotosError,
  getPhotoSuccess,
  getPhotoError,
  editPhotoSuccess,
  editPhotoError,
} from '../photos/actions';

function* getPhotos() {
  try {
    const photos = yield call(api.photos.getPhotos);
    yield put(getPhotosSuccess(photos));
  } catch (e) {
    yield put(getPhotosError);
  }
}

function* getSinglePhoto({ payload }) {
  try {
    const singlePhoto = yield call(api.photos.getSinglePhoto, payload);
    yield put(getPhotoSuccess(singlePhoto));
  } catch (e) {
    yield put(getPhotoError(e));
  }
}

function* editSinglePhoto({ payload }) {
  try {
    const editSinglePhoto = yield call(api.photos.editSinglePhoto, payload);
    yield put(editPhotoSuccess(editSinglePhoto));
  } catch (e) {
    yield put(editPhotoError(e));
  }
}

function* sagaPhotos() {
  yield takeEvery(GET_PHOTOS_REQUEST, getPhotos);
  yield takeEvery(GET_PHOTO_REQUEST, getSinglePhoto);
  yield takeEvery(EDIT_PHOTO_REQUEST, editSinglePhoto);
}

export default sagaPhotos;
