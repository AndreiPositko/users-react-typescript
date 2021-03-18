import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from './constants';

export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostsSuccess = (payload) => ({
  type: GET_POSTS_SUCCESS,
  payload,
});

export const getPostsError = () => ({
  type: GET_POSTS_ERROR,
});
