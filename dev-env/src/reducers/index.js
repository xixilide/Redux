import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import comments from './comments';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  courses,
  comments,
  routing: routerReducer });

export default rootReducer;
