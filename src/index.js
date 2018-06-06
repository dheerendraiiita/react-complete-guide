import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routers from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routers} />
  </Provider>,
  document.getElementById('app')
);
