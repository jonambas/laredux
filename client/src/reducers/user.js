import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, FETCH_USER_SUCCESS,
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/actionTypes';
import initialState from '../store/initialState';

function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_REQUEST :
      return { ...state, authenticated: false, authenticating: true, loginError: undefined };
    case LOGIN_SUCCESS :
      return { ...state, authenticated: true, authenticating: false };
    case LOGIN_ERROR :
      return { ...state,
        authenticated: false,
        authenticating: false,
        loginError: action.loginErrorMessage };

    case FETCH_USER_SUCCESS :
      return { ...state, ...action.user };
    // case FETCH_USER_ERROR :
    // case FETCH_USER :

    case REGISTER_REQUEST :
      return { ...state, registering: true, registerErrors: undefined };
    case REGISTER_SUCCESS :
      return { ...state, registering: false };
    case REGISTER_ERROR :
      return { ...state, registering: false, registerErrors: action.registerErrorMessages };

    case LOGOUT :
      return initialState.user;

    default:
      return state;
  }
}

export default user;
