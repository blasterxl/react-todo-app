import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from './components/TodoApp';
import configureStore from './store/configureStore';

import * as todoActions from './actions';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

const store = configureStore();

//-----------------------

store.dispatch(todoActions.addTodo('Clean the yard'));
store.dispatch(todoActions.addTodo('Do something else'));
store.dispatch(todoActions.setSearchText('clean'));

render(
  <Provider store = {store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
