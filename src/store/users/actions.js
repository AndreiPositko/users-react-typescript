import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  USER_RESET,
} from './constants';

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersError = () => ({
  type: GET_USERS_ERROR,
});

export const getUserRequest = (payload) => ({
  type: GET_USER_REQUEST,
  payload,
});

export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserError = () => ({
  type: GET_USER_ERROR,
});

export const editUserRequest = (payload) => ({
  type: EDIT_USER_REQUEST,
  payload,
});

export const editUserSuccess = (payload) => ({
  type: EDIT_USER_SUCCESS,
  payload,
});

export const editUserError = () => ({
  type: EDIT_USER_ERROR,
});

export const userReset = () => ({
  type: USER_RESET,
});
