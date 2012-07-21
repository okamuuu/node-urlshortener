var mongoose = require('mongoose');

// 定義フェーズ
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
  name:  String,
  point: Number
});
mongoose.model('User', UserSchema);

// 使用フェーズ
mongoose.connect('mongodb://localhost/urlshortener');

var User = mongoose.model('User');
var user = new User();
user.name  = 'KrdLab';
user.point = 777;
user.save(function(err) {
  if (err) { console.log(err); }
});

// ※注意：イベント駆動

