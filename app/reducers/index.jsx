import { combineReducers } from 'redux';
import uuid from 'node-uuid';
import moment from 'moment';

import {
  SET_SEARCH_TEXT,
  TOGGLE_SHOW_COMPLETED,
  UPDATE_TODO,
  ADD_TODO,
  ADD_TODOS,
  LOGIN,
  LOGOUT
} from '../constants';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.searchText;
    default:
      return state;
  };
};

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_COMPLETED:
      return !state;
    default:
      return state;
  };
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.todo
      ];
    case UPDATE_TODO:
      return state.map((todo) => {
        if(todo.id == action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      });
    case ADD_TODOS:
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  };
};

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.uid
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  searchTextReducer,
  showCompletedReducer,
  todosReducer,
  authReducer
});
