import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import PhotoGrid from './PhotoGrid';
import Single from './Single';
import * as actionCreators from '../actions/actionCreators';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  actionCreators,
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
