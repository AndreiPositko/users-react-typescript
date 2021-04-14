import { GET_SERVER_ERROR } from './constants';

const initialState = {
  errors: [],
};

const errorReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_SERVER_ERROR:
      return {
        ...state,
        errors: [...state.errors, payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default errorReducer;
