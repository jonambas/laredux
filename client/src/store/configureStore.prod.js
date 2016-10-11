import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [ thunk, routerMiddleware(browserHistory) ];
const initialState = {
  user: {
    authenticated: false
  }
};

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;
export const history = syncHistoryWithStore(browserHistory, store);