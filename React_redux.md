# React Redux

## React Redux 将React 和 Redux 绑定起来

### Installation
```
 npm install --save react-redux
```
###  Provider
导入　{ Provider}　和 store, { history }

```js
import { Provider } from 'react-redux';
```
```js
const router = (
  <Provider store={store}>
    <Router history={history}>
      ...
    </Router>
  </Provider>
)
```
Connects a React component to a Redux store. connect is a facade around connectAdvanced, providing a convenient API for the most common use cases.

参考文档
- [Provider](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store)
- [React 和　Redux绑定起来](http://redux.js.org/docs/basics/UsageWithReact.html)
- [初始化Store中的状态变量](https://egghead.io/lessons/javascript-redux-supplying-the-initial-state?course=building-react-applications-with-idiomatic-redux)


### 开发 React 常用工具： React Devtools

借助 React Devtools 来演示一下 Redux store 的 dispatch 接口的使用，发送一个 Redux action，从而触发 Redux reducer，进而更新存储在 store 中的状态变量

```js
$r.store.dispatch({type: 'INCREMENT_LIKE', index: 1})
```

## 读取 Store 中的 Courses State
```js
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Main from './Main';

function mapStateToProps(state) {
  return {
    courses: state.courses,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
```
- [bindActionCreators](http://redux.js.org/docs/api/bindActionCreators.html)

Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
- [connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

Connects a React component to a Redux store. connect is a facade around connectAdvanced, providing a convenient API for the most common use cases.
