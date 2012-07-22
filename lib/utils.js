function utils() {}

var _this = module.exports = new utils();

module.exports.isUndefined = function(something) {
    return typeof something === 'undefined' ? true : false;
};

module.exports.isNull = function(something) {
    return Object.prototype.toString.call(something) === '[object Null]' ? true : false;
};

module.exports.isBoolean = function(bool) {
    return typeof bool === 'boolean' ? true : false;
};

module.exports.isNumber = function(number) {
    return typeof number === 'number' ? true : false;
};

module.exports.isString = function(string) {
    return typeof string === 'string' ? true : false;
};

module.exports.isObject = function(object) {
    return Object.prototype.toString.call(object) === '[object Object]' ? true : false;
};

module.exports.isArray = function(array) {
    return Object.prototype.toString.call(array) === '[object Array]' ? true : false;
};


