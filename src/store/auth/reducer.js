import { AUTH_SUCCESS, AUTH_FAILED } from './constants';

const initialState = {
  userName: 'admin',
  password: '12345',
  isLoggedIn: !!localStorage.getItem('password'),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
