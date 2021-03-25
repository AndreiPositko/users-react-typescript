import { takeEvery, call, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { getPhotoSuccess, getPhotoError } from '../photos/actions';
import { GET_PHOTO_REQUEST } from '../photos/constants';

function* getSinglePhoto({ payload }) {
  try {
    const singlePhoto = yield call(api.photos.getSinglePhoto, payload);
    console.warn('singlePhoto', singlePhoto);
    yield put(getPhotoSuccess(singlePhoto));
  } catch (e) {
    yield put(getPhotoError(e));
  }
}

function* sagaSinglePhoto() {
  yield takeEvery(GET_PHOTO_REQUEST, getSinglePhoto);
}

export default sagaSinglePhoto;
