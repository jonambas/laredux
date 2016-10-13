import { render } from 'react-dom';
import { checkToken } from './api/user';
import routes from './routes/routes';
import store from './store/configureStore';

import './ui/styles/styles.scss';

store.dispatch(checkToken());
render(routes, document.getElementById('root'));
