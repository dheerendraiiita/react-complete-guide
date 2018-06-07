import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routers from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from "./actions/courseActions";

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routers} />
  </Provider>,
  document.getElementById('app')
);
