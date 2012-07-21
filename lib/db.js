var mongoose = require('mongoose');

// 定義フェーズ
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
    url: {
        type: String,
        unique: true
    },
    shorten: String
});

mongoose.model('Url', UrlSchema);
mongoose.connect('mongodb://localhost/urlshortener');

var Url = mongoose.model('Url');
var url = new Url();

function db() {}

var _this = module.exports = new db();

module.exports.find = function(query, callback) {

    Url.findOne(query, function(err, docs) {

        if (err) {
            return callback(err);
        }

        callback(null, docs);
    });
};
