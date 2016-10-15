import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from './components/TodoApp';
import TodoAPI from './api/TodoAPI';
import * as actions from './actions';
import configureStore from './store/configureStore';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

const store = configureStore();

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state.todosReducer);
  TodoAPI.setTodos(state.todosReducer);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

render(
  <Provider store = {store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
