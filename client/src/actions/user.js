import { clearToken } from './actionUtils';
import * as types from './actionTypes';

// Login User
export function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

export function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS,
  };
}

export function loginError(loginErrorMessage) {
  return {
    type: types.LOGIN_ERROR,
    loginErrorMessage,
  };
}

// This resets all auth & user states
export function logout() {
  clearToken();
  return {
    type: types.LOGOUT,
  };
}

// Fetching User Information
export function fetchUserRequest() {
  return {
    type: types.FETCH_USER_REQUEST,
  };
}

export function fetchUserSuccess(user) {
  return {
    type: types.FETCH_USER_SUCCESS,
    user,
  };
}

export function fetchUserError(fetchUserErrorMessage) {
  return {
    type: types.FETCH_USER_ERROR,
    fetchUserErrorMessage,
  };
}

// User Registration
export function registerRequest() {
  return {
    type: types.REGISTER_REQUEST,
  };
}

export function registerSuccess() {
  return {
    type: types.REGISTER_SUCCESS,
  };
}

export function registerError(registerErrorMessages) {
  return {
    type: types.REGISTER_ERROR,
    registerErrorMessages,
  };
}
