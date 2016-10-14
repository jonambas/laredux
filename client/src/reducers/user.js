import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

function user(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST :
      return { ...state, authenticated: false, authenticating: true, loginError: undefined };
    case types.LOGIN_SUCCESS :
      return { ...state, authenticated: true, authenticating: false };
    case types.LOGIN_ERROR :
      return { ...state,
        authenticated: false,
        authenticating: false,
        loginError: action.loginErrorMessage };

    case types.FETCH_USER_SUCCESS :
      return { ...state, ...action.user };
    // case types.FETCH_USER_ERROR :
    // case types.FETCH_USER_REQUEST :

    case types.REGISTER_REQUEST :
      return { ...state, registering: true, registerErrors: undefined };
    case types.REGISTER_SUCCESS :
      return { ...state, registering: false };
    case types.REGISTER_ERROR :
      return { ...state, registering: false, registerErrors: action.registerErrorMessages };

    case types.LOGOUT :
      return initialState.user;

    default:
      return state;
  }
}

export default user;
