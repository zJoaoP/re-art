import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import search from './search';

const reducers = combineReducers({
  search,
});

export default createStore(reducers, applyMiddleware(thunk));
