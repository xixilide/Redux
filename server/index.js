var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = require('./config.js').port;
var uri = require('./config.js').uri;
mongoose.connect(uri);
mongoose.Promise = global.Promise;//解决异步操作出现的错误
var User = require('./models/User.js');


var routes = require('./routes');
var db = mongoose.connection;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // 如果想使用 form 提交，这一行是必要的
var cors= require('cors');//跨域
app.use(cors());//使用中间件
db.on('error', console.log);

db.once('open', function() {
 //  var post = new User({
 //    username:"xxx",
 //    password:"111",
 //    email:"221www@sina.com"});
 //  post.save(function(err){
 //   if(err) console.log(err);
 // })
 console.log('success!');
});

routes(app);

app.listen(port, function() {
  console.log('Express server is listening on port ' + port);
});
