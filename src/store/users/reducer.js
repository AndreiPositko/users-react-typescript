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

import { transformUserData } from '../../utils/helper';

const initialState = {
  data: [],
  singleUser: {},
  editedSingleUser: {},
  loading: false,
};

const usersReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_USERS_REQUEST:
    case GET_USER_REQUEST:
    case EDIT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        singleUser: payload,
      };

    case EDIT_USER_SUCCESS:
      const data = state.data.map((item) => {
        if (item.id === payload.id) {
          return transformUserData(item, payload);
        } else {
          return item;
        }
      });

      return {
        ...state,
        data,
        loading: false,
        editedSingleUser: payload,
      };

    case GET_USERS_ERROR:
    case GET_USER_ERROR:
    case EDIT_USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    case USER_RESET:
      return {
        ...state,
        singleUser: initialState.singleUser,
      };
    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
