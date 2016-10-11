import { browserHistory } from 'react-router';
import api from '../api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

// TODO: BREAK THIS UP 

// Initiates Login
export function login(credentials) {
  return (dispatch) => {

    dispatch(loginRequest());

    api.post('/login', credentials)
      .then(response => {
        dispatch(loginSuccess());
        localStorage.setItem('token', response.data.token);
      })
      .then(() => {
        dispatch(fetchUser());
        browserHistory.push('/dashboard')
      })
      .catch(error => {
        dispatch(loginError(error.response.data.error));
      });
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST    
  }
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS    
  }
}

export function loginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError
  }
}

export function logout() {
  localStorage.removeItem('token');

  return {
    type: LOGOUT
  }
}


export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const RESET_USER = 'RESET_USER';

// Initiates getUser
export function fetchUser(user) {
  return (dispatch) => {
    
    dispatch(fetchUserRequest());

    api.get('/user', {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        const { name, id, email } = response.data.user;
        dispatch(fetchUserSuccess({ name, id, email }));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchUserError(error));
      });
  }
}

export function fetchUserRequest() {
  return {
    type: FETCH_USER    
  }
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
}

export function fetchUserError(fetchUserError) {
  return {
    type: FETCH_USER_ERROR,
    fetchUserError
  }
}

export function resetUser() {
  return {
    type: RESET_USER
  }
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export function register(credentials) {
  console.log('register action hit');
  return (dispatch) => {

    dispatch(registerRequest());

    api.post('/register', credentials)
      .then(response => {
        dispatch(registerSuccess());
        localStorage.setItem('token', response.data.token);
      })
      .then(() => {
        dispatch(loginSuccess());
        dispatch(fetchUser());
        browserHistory.push('/dashboard')
      })
      .catch(error => {
        console.log(error);
        dispatch(registerError(error.response.data.error));
      });
  }
}

export function registerRequest() {
  return {
    type: REGISTER_REQUEST    
  }
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS    
  }
}

export function registerError(registerError) {
  return {
    type: REGISTER_ERROR,
    registerError
  }
}
