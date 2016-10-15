import moment from 'moment';
import firebase, { firebaseRef } from './../api/firebaseAPI';

import {
  SET_SEARCH_TEXT,
  TOGGLE_SHOW_COMPLETED,
  TOGGLE_TODO,
  ADD_TODO,
  ADD_TODOS
} from '../constants';

export const setSearchText = (searchText) => {
  return {
    type: SET_SEARCH_TEXT,
    searchText
  };
};

export const toggleShowCompleted = () => {
  return {
    type: TOGGLE_SHOW_COMPLETED
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
  };
};

export const addTodos = (todos) => {
  return {
    type: ADD_TODOS,
    todos
  };
};

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    let todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};
