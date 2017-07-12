import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

import {AppContainer} from 'react-hot-loader';

const rootEl = document.getElementById('app');

ReactDom.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDom.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
