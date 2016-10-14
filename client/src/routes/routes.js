import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from '../store/configureStore';
import { verifyAuth } from './routeUtils';

import MainLayout from '../ui/layouts/MainLayout';
import Welcome from '../ui/components/Welcome';
import Login from '../ui/components/auth/Login';
import Register from '../ui/components/auth/Register';
import Logout from '../ui/components/auth/Logout';
import Dashboard from '../ui/components/Dashboard';
import NotFound from '../ui/components/NotFound';

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Welcome} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/dashboard" component={Dashboard} onEnter={verifyAuth} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
