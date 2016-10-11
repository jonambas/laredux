import store from '../store/configureStore';
import { loginSuccess } from  '../actions/user';

export const verifyAuth = (next, replace) => {
  const state = store.getState();

  const intendedRoute = state.routing.locationBeforeTransitions.pathName; // Doesn't do anything yet
  // console.log('attempting', intendedRoute);

  if (!state.user.authenticated) {
    replace('/');
  }
}

export const checkToken = () => {
  const token = localStorage.getItem('token');

  if (token){
    store.dispatch(loginSuccess(token));
  }
}