import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from './views/Home';

import store from './store/index';

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}
