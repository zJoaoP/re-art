import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import search from './search';

const reducer = combineReducers({
  search,
});

export default createStore(reducer, applyMiddleware(thunk));
