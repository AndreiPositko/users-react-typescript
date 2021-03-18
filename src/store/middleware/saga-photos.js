import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import { GET_PHOTOS_REQUEST } from '../photos/constants';
import { getPhotosSuccess, getPhotosError } from '../photos/actions';

function* getPhotos() {
  try {
    const photos = yield call(api.photos.getPhotos);
    yield put(getPhotosSuccess(photos));
  } catch (e) {
    yield put(getPhotosError);
  }
}

function* sagaPhotos() {
  yield takeEvery(GET_PHOTOS_REQUEST, getPhotos);
}

export default sagaPhotos;
