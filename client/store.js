import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

export const history = createHistory();
const middleware = routerMiddleware(history);

// The following is for redux-devtools to work
const composeEnhancers = composeWithDevTools({
  actionSanitizer: true,
  stateSanitizer: true,
});

const defaultState = { posts, comments };
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(middleware))
);

export default store;
