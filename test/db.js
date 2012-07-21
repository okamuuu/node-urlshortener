var assert = require("assert")

var db = require('../lib/db');

describe('db', function() {
    describe('find users', function() {
        it('should return users', function(done) {

            db.find({}, function(err, result) {
                //console.log(err, result);
                assert.ok(!err);
                done();
            });
        })
    })
})
