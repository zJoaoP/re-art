import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/index';

import Artwork from './views/Artwork';
import Search from './views/Search';
import Home from './views/Home';

const theme = createMuiTheme({
  root: {
    backgroundColor: '#ffffff',
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#00173a',
    },
    background: {
      default: '#00173a',
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/artwork/:objectNumber" component={Artwork} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
