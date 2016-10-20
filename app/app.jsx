import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from './components/TodoApp';
import Login from './components/Login';
import TodoAPI from './api/TodoAPI';
import * as actions from './actions';
import configureStore from './store/configureStore';
import firebase from './api/firebaseAPI';

const store = configureStore();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
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

store.dispatch(actions.startAddTodos());

render(
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login}/>
        <Route path="/todos" component={TodoApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
