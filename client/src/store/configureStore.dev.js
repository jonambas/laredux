/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from './initialState';

const middleware = [thunk, routerMiddleware(browserHistory)];
const store = createStore(rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(...middleware))
);

export default store;
export const history = syncHistoryWithStore(browserHistory, store);
