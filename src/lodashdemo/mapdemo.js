"use strict"

var _ = require('lodash');

/**
 * map
 */
function square(n) {
    return n * n;
}

let res = _.map([4, 7], square);
console.log('res--->', res);