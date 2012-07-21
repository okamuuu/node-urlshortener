var mongoose = require('mongoose');

// 定義フェーズ
var Schema   = mongoose.Schema;

var UrlSchema = new Schema({
    url: {
        type: String,
        unique: true
    },  
    shorten: String
});

mongoose.model('Url', UrlSchema);

// 使用フェーズ
mongoose.connect('mongodb://localhost/urlshortener');

var Url = mongoose.model('Url');
var url = new Url();

url.url  = 'https://github.com/okamuuu';
url.shorten = 'M2jQam';
url.save(function(err) {
    if (err) { 
        console.log(err); 
    }
});


