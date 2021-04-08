import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  POST_RESET,
} from './constants';

import { transformPostData } from '../../utils/helper';

const initialState = {
  posts: [],
  singlePost: {},
  editedSinglePost: {},
  loading: false,
};

const postsReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_POSTS_REQUEST:
    case GET_POST_REQUEST:
    case EDIT_POST_REQUEST:
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
    case EDIT_POST_SUCCESS:
      const posts = state.posts.map((item) => {
        if (item.id === payload.id) {
          return transformPostData(item, payload);
        } else {
          return item;
        }
      });
      return {
        ...state,
        posts,
        loading: false,
        editedSinglePost: payload,
      };
    case GET_POSTS_ERROR:
    case GET_POST_ERROR:
    case EDIT_POST_ERROR:
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
