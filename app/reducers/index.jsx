import { combineReducers } from 'redux';

import {
  CHANGE_NAME,
  ADD_HOBBY,
  REMOVE_HOBBY
} from '../constants';

function nameReducer(state = 'Anonimus', action) {
  switch (action.type) {
    case CHANGE_NAME:
      return action.name;
    default:
      return state;
  };
};

const nextHobbyId = 1;
function hobbiesReducer(state = [], action) {
  switch (action.type) {
    case ADD_HOBBY:
      return [
        ...state,
        {
          id: nextHobbyId,
          hobby: action.hobby
        }
      ];
    case REMOVE_HOBBY:
      return state.filter(hobby => hobby.id !== action.id);
    default:
      return state;
  };
};

export default combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer
});
