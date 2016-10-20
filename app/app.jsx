import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import * as actions from './actions';
import configureStore from './store/configureStore';
import firebase from './api/firebaseAPI';
import router from './router';

const store = configureStore();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

render(
  <Provider store = {store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
