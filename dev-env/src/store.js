import { createStore,compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
//构建状态树
import comments from './data/comments';
import courses from './data/courses';

const defaultState = {
  courses: courses,
  comments: comments
};
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
