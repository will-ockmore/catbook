/* eslint-disable global-require */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import rootReducer from './reducers/reducers';

const store = createStore(rootReducer);

const rootEl = document.getElementById('app');

let render = () => {
  const App = require('./App').default;

  ReactDOM.render(<App store={store} />, rootEl);
};

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require('redbox-react');
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    );
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}

render();
