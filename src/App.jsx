import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/index';

import Search from './views/Search';
import Home from './views/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#0d47a1',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
