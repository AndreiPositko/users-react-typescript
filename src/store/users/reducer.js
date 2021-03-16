import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from './constants';

const initialState = {
  data: [],
  loading: false,
};

const usersReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_USERS_REQUEST:
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
    case GET_USERS_ERROR:
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

export default usersReducer;
