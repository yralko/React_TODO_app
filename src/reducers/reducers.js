import { combineReducers } from 'redux';
import uniqid from 'uniqid';
import * as actions from '../actions/actions';

function categories(state = [], action) {
  switch (action.type) {
    case 'ADD_CATEGORY': {
      const newCategory = {
        name: action.data,
        key: uniqid(),
      };
      return [...state, newCategory];
    }
    case 'DELETE_CATEGORY':
      return [state.filter(v => v.id !== action.id)];
    default:
      return state;
  }
}

function tasks(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = {
        name: action.data,
        key: uniqid(),
      };
      return [...state, newTask];
    }
    case 'DELETE_TASK':
      return [state.filter(v => v.id !== action.id)];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  categories,
  tasks,
});

export default rootReducer;
