# 塔顶上的 Redux --核心概念

`Redux` 是天生用来管理应用 state 的，它有一个 store 容器来储存应用中的 state，任何组件都可以从 store 中读取 state
## Redux store

### 1.创建 store
 新建一个文件 src/store.js 文件，先添加一行代码：
```js
import { createStore, compose } from 'redux';
```
redux 中分别导入 createStore 模块 和 compose 模块。

其中 createStore 这个接口就是用来创建 Redux store 容器的，

```js
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
```
react-router-redux 包并不是 Redux 项目必须的，用它则可以在 redux-devtools-extension 中显示页面浏览历史，不用它 Redux 和 React Router 也可以在一起完美工作。

### 2.构建状态树

```js
import comments from './data/comments';
import courses from './data/courses';

const defaultState = {
  courses: courses,
  comments: comments
};

const store = createStore(rootReducer, defaultState);
```

导入在静态文件中存储的课程信息和课程的评论信息，然后用它们来定义一个对象常量 defaultState，接下来使用 createStore 接口创建一个 store，createStore 接口的第一个参数是 rootReducer，也就是构建的状态树，第二个参数就是状态树的初始值。

所谓的状态树就是一个普通的 JS 对象，本项目要构建的状态树其实是这样的：
```js
{
  courses: courses,
  comments: comments
}
```

自定义了两个状态变量 courses 和 comments，其初始值分别是从文件 ./data/courses 和 ./data/courses 中导入的数据。

这样，我们就把课程信息和评论信息存储到 store 容器中了
接下来，就是调用 syncHistoryWithStore 把路由状态（routing state）信息存储到新创建的 store 容器内。
### 3. 存储到新创建的 store 容器内
```js
export const history = syncHistoryWithStore(browserHistory, store);
```

最后再添加一行代码，把我们刚才创建的 store 容器导出去，供外部组件使用。

```js
export default store;
```

Redux 的三原则之一：单一数据源保证在一个 Redux 应用中只有唯一的一个 store 用于储存应用中唯一的一个状态树。

## Redux actions

创建了一个 Redux store 容器，也知道了 store 容器用来储存应用中的 state，那怎么来更新这些 state，就需要先了解一些关于 Redux actions 的事情。

### 什么是 Actions

[Actions](http://redux.js.org/docs/basics/Actions.html) 描述了应用中所发生的事情，actions 可不是唯一的，因为应用中会发生很多事情，比如说本案例中会发生的事件就有点赞课程、添加评论等等。那怎么用代码来代表所发生的事情呢？

一个 action 就是一个平常的 JavaScript 对象,定义如下:
```js
{
  type: 'INCREMENT',
  number: 1
}
```
一个 action 对象必须要有一个 type 属性，用来表明所发生事情的类型，type 属性值一般是大写的字符串常量。除 type 属性之外，还可以带有其它的属性，如代码中的 index，代表事情发生时产生的数据信息。

### 什么是 Action Creators

Action creators 就是用来创建 actions 的函数，函数返回值是 action 对象类型。一个 action creator 的定义是类似这样的：
```js
function increment(number) {
  return {
    type: 'INCREMENT',
    number
  }
}
```
### 1.新建一个文件 actions/index.js，添加如下代码：

```js
// action types

export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
```
首先定义本案例所需要的三个 action 类型，当项目中有很多 action 类型的时候，可以单独创建一个文件来存储所有的 action 类型。

### 2.定义点赞课程的 action creator

```js
export function increment(index) {
  return { type: INCREMENT_LIKES, index }
}
```
其中，index 代表被点赞课程在课程数组中的索引号

### 3.定义添加评论的 action creator
```js
export function addComment(courseId, author, comment) {
  return { type: ADD_COMMENT, courseId, author, comment }
}
```
其中，courseId 是被评论的课程 id 号，author 是评论者的名字，comment 是评论的内容
### 4.定义删除评论的 action creator：
```js
export function removeComment(courseId, i) {
  return { type: REMOVE_COMMENT, i, courseId }
}
```
其中，courseId 是被删除评论隶属课程的 id 号，i 是指被删除评论在隶属课程的评论数组中的索引号

## Redux Reducers

一个 reducer 就是一个 JS 纯函数，这个函数有两个参数，一个是上一个 state 值，另一个就是上节视频介绍的 Redux action，它的返回值 state。一般一个 state 变量对应着一个 reducer 文件，本案例有 courses 和 comments 两个 state

### 1.编写courses reducer

新建一个文件 reducers/courses.js，添加代码：
```js
function courses(state = [], action) {
  console.log(state, action);
  return state;
}

export default courses;
```
上面代码就定义了一个 courses reducer，不过这个 reducer 并没有对上一个 state 做任何处理，只是打印 state 和 action 的值，并返回 state 值

### 2.编写 comments reducer

接下来新建一个文件 reducers/comments.js，添加代码：
```
function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;
```
### 3.合并 courses 和 comments 两个 reducers

新建一个文件 reducers/index.js，添加代码：
```js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import comments from './comments';

const rootReducer = combineReducers({courses, comments, routing: routerReducer });

export default rootReducer;
```
因为在 Redux 项目中只有唯一的一个状态树（state tree），所以通过 combineReducers 把刚才定义的 courses reducer 和 comments reducer 合并起来，生成一个 rootReducer 提供给创建 Redux store 的接口 createStore 使用。

[routerReducer](https://github.com/reactjs/react-router-redux#routerreducer) 作用是把路由状态添加到状态树中（用于开发调试，可以不添加），其对应的 state 变量名是 routing，最终本案例的状态树是这样的：
```js
{
  courses: courses,
  comments: comments,
  routing: routerReducer
}
```
这个 JS 对象的每一个 key 对应着存储在 store 中的一个状态变量的名字，每一个 value 则对应着一个 reducer，决定着状态变量值。
