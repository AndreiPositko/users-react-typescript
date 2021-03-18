import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
} from './constants';

const initialState = {
  photos: [],
  loading: false,
};

const photosReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_PHOTOS_REQUEST:
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
    case GET_PHOTOS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default photosReducer;
