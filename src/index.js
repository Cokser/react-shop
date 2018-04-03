import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import App from './components/App/App';

render(
  <AppContainer>
      <App />
  </AppContainer>,
  document.getElementById('root'),
);

if (module && module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NewApp = require('./components/App/App').default;
    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
