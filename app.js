
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var db = require('./lib/db');
var base62 = require('./lib/base62');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.post('/', function(req, res) {

    var _stash = {
        title: 'short url',
        error: null,
        short_url: null
    };

    // パラメータをチェック
    if (!req.body.url) {
        _stash.error = 'Missing url parameter';
        return res.render('result', _stash);
    }  
    else if (req.body.url > 101) {
        _stash.error = 'url parameter too long';
        return res.render('result', _stash);
    }

    db.find({url:req.body.url}, function(err, result) {
        
        if (err) {
            return res.send('Error: '+ err, 500);
        }

        _stash.short_url = result.shorten;
    
        return res.render('result', _stash);
    });
});

// 5文字
app.get(/^\/([0-9a-zA-Z]{5,})$/, function(req, res) {

    //var encryptedId = req.params[0];
    //var decryptId = base62.base62_string_to_int(encryptedId);

    var shorten = req.params[0];
    console.log('shorten', shorten);
    
    db.find({shorten:shorten}, function(err, result) {

        console.log(err, result);

        if(err) {
            return res.send('Error: ' + err, 500);
        }  
        else if (!result) {
            return res.send('Not Found', 404);
        }

        res.redirect(result.url);
    });

});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
