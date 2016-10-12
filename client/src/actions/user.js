import { browserHistory } from 'react-router';
import api from '../api';

// TODO: Break this up

// Login User
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginError(loginErrorMessage) {
  return {
    type: LOGIN_ERROR,
    loginErrorMessage,
  };
}

export function logout() {
  localStorage.removeItem('token');

  return {
    type: LOGOUT,
  };
}

// Fetching User Information
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const RESET_USER = 'RESET_USER';

export function fetchUserRequest() {
  return {
    type: FETCH_USER,
  };
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
}

export function fetchUserError(fetchUserErrorMessage) {
  return {
    type: FETCH_USER_ERROR,
    fetchUserErrorMessage,
  };
}

export function resetUser() {
  return {
    type: RESET_USER,
  };
}

// User Registration
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export function registerRequest() {
  return {
    type: REGISTER_REQUEST,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerError(registerErrorMessage) {
  return {
    type: REGISTER_ERROR,
    registerErrorMessage,
  };
}

// API Actions

// Initiates getUser
export function fetchUser() {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    api.get('/user', {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
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
        localStorage.setItem('token', response.data.token);
      })
      .then(() => {
        dispatch(fetchUser());
        browserHistory.push('/dashboard');
      })
      .catch(error => dispatch(loginError(error.response.data.error)));
  };
}

// Initiates registration
export function register(credentials) {
  return (dispatch) => {
    dispatch(registerRequest());

    api.post('/register', credentials)
      .then((response) => {
        dispatch(registerSuccess());
        localStorage.setItem('token', response.data.token);
      })
      .then(() => {
        dispatch(loginSuccess());
        dispatch(fetchUser());
        browserHistory.push('/dashboard');
      })
      .catch(error => dispatch(registerError(error.response.data.error)));
  };
}

// Used to log user in if token is valid
// TODO: add an api endpoint to check token
export function checkToken() {
  return (dispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(loginSuccess());
      dispatch(fetchUser());
    }
  };
}
