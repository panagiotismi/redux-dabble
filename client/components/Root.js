import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import Single from './Single';

const Root = () => (
  <Router>
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Switch>
    </div>
  </Router>
);

export default Root;
