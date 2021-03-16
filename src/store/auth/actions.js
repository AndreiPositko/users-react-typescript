import { AUTH_SUCCESS, AUTH_FAILED } from './constants';

export const logIn = () => ({
  type: AUTH_SUCCESS,
});

export const logOut = () => ({
  type: AUTH_FAILED,
});
