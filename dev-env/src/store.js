import { createStore, applyMiddleware, compose  } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
//构建状态树
import comments from './data/comments';
import courses from './data/courses';

const defaultState = {
  courses: courses,
  comments: comments
}
const store = createStore(rootReducer, defaultState,compose(applyMiddleware()));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}
