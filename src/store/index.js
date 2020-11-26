import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import favorites from './favorites';
import search from './search';

const reducers = combineReducers({
  favorites,
  search,
});

export default createStore(reducers, applyMiddleware(thunk));
