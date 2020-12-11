import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import favorites from 'store/favorites';
import search from 'store/search';

const reducers = combineReducers({
  favorites,
  search,
});

// Recovering favorites from local storage.
const storedState = localStorage.getItem('re-art')
  ? JSON.parse(localStorage.getItem('re-art'))
  : {};

const store = createStore(reducers, storedState, applyMiddleware(thunk));

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    're-art',
    JSON.stringify({ favorites: state.favorites })
  );
});

export default store;
