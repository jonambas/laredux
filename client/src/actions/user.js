import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT,
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from './actionTypes';

// Login User
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

// This resets all auth & user states
export function logout() {
  localStorage.removeItem('token');
  return {
    type: LOGOUT,
  };
}

// Fetching User Information
export function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
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

// User Registration
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

export function registerError(registerErrorMessages) {
  return {
    type: REGISTER_ERROR,
    registerErrorMessages,
  };
}
