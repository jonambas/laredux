/* eslint-disable no-unused-vars */

import { render } from 'react-dom';
import { checkToken } from './actions/api';
import css from './ui/styles/styles.scss';
import routes from './routes/routes';
import store from './store/configureStore';

store.dispatch(checkToken());
render(routes, document.getElementById('root'));
