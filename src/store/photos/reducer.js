import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_ERROR,
  PHOTO_RESET,
} from './constants';

const initialState = {
  photos: [],
  singlePhoto: {},
  loading: false,
};

const photosReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_PHOTOS_REQUEST:
    case GET_PHOTO_REQUEST:
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
    case GET_PHOTOS_ERROR:
    case GET_PHOTO_ERROR:
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
