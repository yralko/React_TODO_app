import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

window.getStore = store.getState();

export default store;
