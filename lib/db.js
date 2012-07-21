var mongoose = require('mongoose');

// 定義フェーズ
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    point: Number
});

mongoose.model('User', UserSchema);
mongoose.connect('mongodb://localhost/urlshortener');

var User = mongoose.model('User');
var user = new User();

function db() {}

var _this = module.exports = new db();

module.exports.find = function (query, callback) {
    
    User.find({}, function(err, docs) {

        if (err) {
            return callback(err);
        }

        callback(null, docs);
    });
};
