import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_ERROR,
  PHOTO_RESET,
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

export const getPhotoRequest = (payload) => ({
  type: GET_PHOTO_REQUEST,
  payload,
});

export const getPhotoSuccess = (payload) => ({
  type: GET_PHOTO_SUCCESS,
  payload,
});

export const getPhotoError = () => ({
  type: GET_PHOTO_ERROR,
});

export const photoReset = () => ({
  type: PHOTO_RESET,
});
