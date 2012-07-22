var assert = require("assert")

var utils = require('../lib/utils');

describe('utils', function() {

    describe('#isUndefined()', function() {

        it('should return true', function(done) {
            assert.ok(utils.isUndefined(undefined));
            assert.ok(!utils.isUndefined(null));
            assert.ok(!utils.isUndefined(0));
            assert.ok(!utils.isUndefined(false));
            assert.ok(!utils.isUndefined(""));
            done();
        });
    });

    describe('#isNull()', function() {

        it('should return true', function(done) {
            assert.ok(utils.isNull(null));
            assert.ok(!utils.isNull(0));
            assert.ok(!utils.isNull(false));
            assert.ok(!utils.isNull(""));
            done();
        });
    });

    describe('#isBoolean()', function() {

        it('should return true', function(done) {
            assert.ok(utils.isBoolean(true));
            assert.ok(utils.isBoolean(false));
            assert.ok(!utils.isBoolean(0));
            assert.ok(!utils.isBoolean("false"));
            assert.ok(!utils.isBoolean());
            done();
        });
    });


    describe('#isNumber()', function() {

        it('should return true', function(done) {
            assert.ok(utils.isNumber(1));
            assert.ok(!utils.isNumber("1"));
            done();
        });
    });

    describe('#isString()', function() {

        it('should return true', function(done) {
            assert.ok(utils.isString("1"));
            assert.ok(!utils.isString(1));
            done();
        });
    });
 
    describe('#isObject()', function() {

        it('should return true', function(done) {
            assert.ok(utils.isObject({}));
            assert.ok(!utils.isObject(1));
            assert.ok(!utils.isObject("1"));
            assert.ok(!utils.isObject([]));
            done();
        });
    });
    
});

