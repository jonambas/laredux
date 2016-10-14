import { browserHistory } from 'react-router';
import api from '../api';
import { getToken, setToken } from './actionUtils';
import { fetchUserRequest, fetchUserSuccess, fetchUserError, loginRequest, loginSuccess,
  loginError, registerRequest, registerSuccess, registerError } from './user';

// API Actions

// Initiates fetch user
export function fetchUser() {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    api.get('/user', {
      headers: { authorization: `Bearer ${getToken()}` },
    })
      .then((response) => {
        const { name, id, email } = response.data.user;
        dispatch(fetchUserSuccess({ name, id, email }));
      })
      .catch(error => dispatch(fetchUserError(error)));
  };
}

// Initiates Login
export function login(credentials) {
  return (dispatch) => {
    dispatch(loginRequest());

    api.post('/login', credentials)
      .then((response) => {
        dispatch(loginSuccess());
        setToken(response.data.token);
      })
      .then(() => {
        dispatch(fetchUser());
        browserHistory.push('/dashboard');
      })
      .catch((error) => {
        dispatch(loginError(error.response ? error.response.data.error : error.message));
      });
  };
}

// Initiates registration
export function register(credentials) {
  return (dispatch) => {
    dispatch(registerRequest());

    api.post('/register', credentials)
      .then((response) => {
        dispatch(registerSuccess());
        setToken(response.data.token);
      })
      .then(() => {
        dispatch(loginSuccess());
        dispatch(fetchUser());
        browserHistory.push('/dashboard');
      })
      .catch((error) => {
        dispatch(registerError(error.response ? error.response.data.error : error.message));
      });
  };
}

// Used to log user in if token is valid
// TODO: add an api endpoint to check token?
export function checkToken() {
  return (dispatch) => {
    const token = getToken();

    if (token) {
      dispatch(loginSuccess());
      dispatch(fetchUser());
    }
  };
}
