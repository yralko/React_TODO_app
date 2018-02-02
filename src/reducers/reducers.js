import defaultState from '../defaults/defaults';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'PUSH':
      return Object.assign({}, state, {categories: [action.data].concat(state.categories)})
      break;
    case 'ACTION_TWO':
      console.log(state);
      break;
  }
}
