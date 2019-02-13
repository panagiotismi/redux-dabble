import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

import store, { history } from '../store';
import Header from './Header';
import PhotoGrid from './PhotoGrid';
import Single from './Single';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
