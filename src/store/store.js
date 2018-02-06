import { createStore } from 'redux';
import { reducer } from '../reducers/reducers'
import { defaultState } from '../defaults/defaults';

let store = createStore(reducer, defaultState);

export default store;
