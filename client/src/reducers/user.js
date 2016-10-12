
function user(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST' :
      return { ...state, authenticated: false, authenticating: true, loginError: null };
    case 'LOGIN_SUCCESS' :
      return { ...state, authenticated: true, authenticating: false };
    case 'LOGIN_ERROR' :
      return { ...state,
        authenticated: false,
        authenticating: false,
        loginError: action.loginErrorMessage };

    case 'FETCH_USER_SUCCESS' :
      return { ...state, ...action.user };
    // case 'FETCH_USER_ERROR' :
    // case 'FETCH_USER' :

    case 'REGISTER_REQUEST' :
      return { ...state, registering: true, registerError: null };
    case 'REGISTER_SUCCESS' :
      return { ...state, registering: false };
    case 'REGISTER_ERROR' :
      return { ...state, registering: false, registerError: action.registerErrorMessage };

    case 'LOGOUT' :
      return { ...state,
        authenticated: false,
        authenticating: false,
        registering: false,
        loginError: null,
        registerError: null,
        id: null,
        name: null,
        email: null,
      };

    default:
      return state;
  }
}

export default user;
