/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Raven from 'raven-js';

import App from './components/App';
import { sentryUrl } from './data/config';

import './styles/style.styl';

Raven.config(sentryUrl).install();

const hotRender = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

hotRender(App);

if (module.hot) {
  module.hot.accept('./components/App', () => hotRender(App));
}
