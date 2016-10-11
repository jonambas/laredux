
function user(state = {}, action) {

  switch(action.type) {
    case 'LOGIN_SUCCESS' :
      return { ...state, authenticated: true };
    case 'LOGOUT' :
      return { ...state, authenticated: false };
    case 'LOGIN_ERROR' :
      return { ...state, errorMessage: action.error };
    default:
      return state;
  }
}

export default user;