var assert = require("assert")

var utils = require('../lib/utils');
var base62 = require('../lib/base62');

describe('base62', function() {

    var string;

    describe('#int_to_base62_string()', function() {

        it('should return true', function(done) {
            string = base62.int_to_base62_string(12345);
            console.log(string);
            assert.ok(utils.isString(string));
            done();
        });
    });

    describe('#base62_string_to_int()', function() {

        it('should return true', function(done) {
            var num = base62.base62_string_to_int(string);
            console.log(num);
            assert.ok(utils.isNumber(num));
            done();
        });
    });

});

