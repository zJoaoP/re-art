import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import header from './header';

const reducer = combineReducers({
  header,
});

export default createStore(reducer, applyMiddleware(thunk));
