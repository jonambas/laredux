
function user(state = {}, action) {

  switch(action.type) {
    case 'LOGIN_REQUEST' :
      return { ...state, authenticated: false, authenticating: true, errorMessage: null };
    case 'LOGIN_SUCCESS' :
      return { ...state, authenticated: true, authenticating: false };
    case 'LOGOUT' :
      return { ...state, authenticated: false, authenticating: false, errorMessage: null };
    case 'LOGIN_ERROR' :
      return { ...state, authenticated: false, errorMessage: action.error, authenticating: false };
    default:
      return state;
  }
}

export default user;