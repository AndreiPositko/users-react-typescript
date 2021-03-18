import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
} from './constants';

export const getPhotosRequest = () => ({
  type: GET_PHOTOS_REQUEST,
});

export const getPhotosSuccess = (payload) => ({
  type: GET_PHOTOS_SUCCESS,
  payload,
});

export const getPhotosError = () => ({
  type: GET_PHOTOS_ERROR,
});
