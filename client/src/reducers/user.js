
function user(state = {}, action) {

  switch(action.type) {
    case 'LOGIN_REQUEST' :
      return { ...state, authenticated: false, authenticating: true, loginError: null };
    case 'LOGIN_SUCCESS' :
      return { ...state, authenticated: true, authenticating: false };
    case 'LOGOUT' :
      return { ...state, authenticated: false, authenticating: false, loginError: null };
    case 'LOGIN_ERROR' :
      return { ...state, authenticated: false, loginError: action.loginError, authenticating: false };
    case 'FETCH_USER_SUCCESS' :
      return { ...state, ...action.user };
    case 'RESET_USER' :
      return { ...state, 
        id: null, 
        name: null, 
        email: null };
    case 'FETCH_USER_ERROR' :
    case 'FETCH_USER' :
    default:
      return state;
  }
}

export default user;