# 自学Redux 时遇到的错误

### 遇到　Cannot read property 'map' of undefined
```
<div style={styles.root}>
{this.props.courses.map((course, i) => <Course key={i} course={course} />)}
</div>
```

是你调用 map 的对象是 undefined，而不是 map 是 undefined

组件初始化的时候的 state 是这样的
```js
{
  data: []
}
```
然后你给 ContentList 的 listData 属性的值是 this.state.data.listData，这个时候 ajax 还没有返回数据，listData 肯定是 undefined 的
