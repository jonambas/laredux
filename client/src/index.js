import React from 'react';
import { render } from 'react-dom';
import { checkToken } from './routes/middleware'
import css from './ui/styles/styles.scss';
import routes from './routes/routes';

checkToken();
render(routes, document.getElementById('root'));
