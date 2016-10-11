import store from '../store/configureStore';
import { loginSuccess, fetchUser } from  '../actions/user';

export const verifyAuth = (next, replace) => {
  const state = store.getState();

  // Doesn't do anything yet
  const intendedRoute = state.routing.locationBeforeTransitions.pathName; 
  // console.log('attempting', intendedRoute);

  if (!state.user.authenticated) {
    replace('/');
  }
}

export const checkToken = () => {
  const token = localStorage.getItem('token');

  if (token){
    store.dispatch(loginSuccess());
    store.dispatch(fetchUser());
  }
}