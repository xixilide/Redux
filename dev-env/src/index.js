import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import App from './components/App';
import Login from './user/login';
import Register from './user/Register';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';
import  './styles/style.css';
import  './styles/main.css';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Courses}></IndexRoute>
        <Route path="/view/:courseId" component={ShowCourse}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
