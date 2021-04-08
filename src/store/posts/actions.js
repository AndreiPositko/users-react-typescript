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

export const getPostRequest = (payload) => ({
  type: GET_POST_REQUEST,
  payload,
});

export const getPostSuccess = (payload) => ({
  type: GET_POST_SUCCESS,
  payload,
});

export const getPostError = () => ({
  type: GET_POST_ERROR,
});

export const editPostRequest = (payload) => ({
  type: EDIT_POST_REQUEST,
  payload,
});

export const editPostSuccess = (payload) => ({
  type: EDIT_POST_SUCCESS,
  payload,
});

export const editPostError = () => ({
  type: EDIT_POST_ERROR,
});

export const postReset = () => ({
  type: POST_RESET,
});
