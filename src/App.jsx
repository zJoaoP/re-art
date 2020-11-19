import React from 'react';
import { Provider } from 'react-redux';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import store from './store/index';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Provider>
  );
}
