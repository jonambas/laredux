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

// This resets all auth & user states
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
