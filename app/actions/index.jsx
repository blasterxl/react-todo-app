import moment from 'moment';
import firebase, { firebaseRef, githubProvider } from './../api/firebaseAPI';

import {
  SET_SEARCH_TEXT,
  TOGGLE_SHOW_COMPLETED,
  UPDATE_TODO,
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

export const updateTodo = (id, updates) => {
  return {
    type: UPDATE_TODO,
    id,
    updates
  };
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`);
    let updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
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

export const addTodos = (todos) => {
  return {
    type: ADD_TODOS,
    todos
  };
};

export const startAddTodos = () => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child('todos');

    return todoRef.once('value').then((snapshot) => {
      let todos = snapshot.val() || {};
      let parsedTodos = [];
      Object.keys(todos).map((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });
      dispatch(addTodos(parsedTodos));
    });
  };
};

export const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(githubProvider)
      .then((result) => {
        let user = result.user;
        console.log('Auth success');
        console.log(user);
      })
      .catch((error) => {
        console.log('Auth error', error);
      });
  };
};

export const startLogout = () => {
  return (dispatch) => {
    return firebase.auth().signOut()
    .then(() => {
      console.log('Logout');
    }, (error) => {
      console.log(error);
    });
  };
};
