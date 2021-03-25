import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  POST_RESET,
} from './constants';

const initialState = {
  posts: [],
  singlePost: {},
  loading: false,
};

const postsReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_POSTS_REQUEST:
    case GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        singlePost: payload,
      };
    case GET_POSTS_ERROR:
    case GET_POST_ERROR:
      return {
        ...state,
        loading: false,
      };
    case POST_RESET:
      return {
        ...state,
        lading: false,
        singlePost: initialState.singlePost,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postsReducer;
