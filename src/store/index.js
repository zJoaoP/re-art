import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import favorites from './favorites';
import search from './search';

const reducers = combineReducers({
  favorites,
  search,
});

// Recovering favorites from local storage.
const state = localStorage.getItem('re-art')
  ? JSON.parse(localStorage.getItem('re-art'))
  : {};

export default createStore(reducers, state, applyMiddleware(thunk));
