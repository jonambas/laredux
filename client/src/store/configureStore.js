/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from './initialState';

const middleware = [thunk, routerMiddleware(browserHistory)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export const history = syncHistoryWithStore(browserHistory, store);
