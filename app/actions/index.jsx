import {
  SET_SEARCH_TEXT,
  TOGGLE_SHOW_COMPLETED,
  TOGGLE_TODO,
  ADD_TODO
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

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  };
};
