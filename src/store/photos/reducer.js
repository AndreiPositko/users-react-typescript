import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_ERROR,
  EDIT_PHOTO_REQUEST,
  EDIT_PHOTO_SUCCESS,
  EDIT_PHOTO_ERROR,
  PHOTO_RESET,
} from './constants';

import { transformPhotoData } from '../../utils/helper';

const initialState = {
  photos: [],
  singlePhoto: {},
  editedSinglePhoto: {},
  loading: false,
};

const photosReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_PHOTOS_REQUEST:
    case GET_PHOTO_REQUEST:
    case EDIT_PHOTO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: payload,
      };
    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        singlePhoto: payload,
      };
    case EDIT_PHOTO_SUCCESS:
      const photos = state.photos.map((photo) => {
        if (photo.id === payload.id) {
          return transformPhotoData(photo, payload);
        } else {
          return photo;
        }
      });
      return {
        ...state,
        photos,
        loading: false,
        singlePhoto: payload,
      };
    case GET_PHOTOS_ERROR:
    case GET_PHOTO_ERROR:
    case EDIT_PHOTO_ERROR:
      return {
        ...state,
        loading: false,
      };
    case PHOTO_RESET:
      return {
        ...state,
        singlePhoto: initialState.singlePhoto,
      };
    default:
      return {
        ...state,
      };
  }
};

export default photosReducer;
