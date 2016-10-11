import axios from 'axios';
import { browserHistory } from 'react-router';

const API_URL = location.href.indexOf('localhost') > 0 ? 'http://laredux.dev/api/v1' : '/api/v1';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

// Initiates Login
export function login(credentials) {
  return (dispatch) => {

    dispatch(loginRequest());

    axios.post(`${API_URL}/login`, credentials)
      .then(response => {
        const token = response.data.token;
        dispatch(loginSuccess(token));
        localStorage.setItem('token', token);
      })
      .then(() => {
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

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: LOGOUT
  }
}
