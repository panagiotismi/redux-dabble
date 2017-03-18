import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Link, Switch } from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import Single from './Single';
import store, { history } from '../store';

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Switch>
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Root;
