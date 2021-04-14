import { GET_SERVER_ERROR } from './constants';

export const getServerError = (payload) => ({
  type: GET_SERVER_ERROR,
  payload,
});
