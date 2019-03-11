"use strict"
var _ = require('lodash');

//_clamp(number,[lower],upper)
let clamp1 = _.clamp(-10, -5, 5);
console.log('clamp1--->', clamp1);
//clamp1---> -5
let clamp2 = _.clamp(10, -5, 5);
console.log('clamp2--->', clamp2);
//clamp2---> 5

//_.inRange(number,[start=0],end)
//ClaChecks如果n在开始和结束之间，但不包括结束。 如果未指定end，则将其设置为以start开始，
//然后设置为0.如果start大于end，则交换params以支持负范围。
let inRange1 = _.inRange(3, 2, 4);
console.log('inRange1--->', inRange1);
//inRange1---> true
let inRange2 = _.inRange(4, 8);
console.log('inRange2--->', inRange2);
//inRange2---> true
let inRange3 = _.inRange(4, 2);
console.log('inRange3--->', inRange3);
//inRange3---> false
let inRange4 = _.inRange(2, 2);
console.log('inRange4--->', inRange4);
//inRange4---> false
let inRange5 = _.inRange(1.2, 2);
console.log('inRange5--->', inRange5);
//inRange5---> true
let inRange6 = _.inRange(5.2, 4);
console.log('inRange6--->', inRange6);
//inRange6---> false
let inRange7 = _.inRange(-3, -2, -6);
console.log('inRange7--->', inRange7);
//inRange7---> true

//_.random([lower=0],[upper=1],[floating])
let random1 = _.random(0, 5);
console.log('random1--->', random1);
//random1---> 3
let random2 = _.random(5);
console.log('random2--->', random2);
//random2---> 4
let random3 = _.random(5, true);
console.log('random3--->', random3);
//random3---> 0.6089800377099186
let random4 = _.random(1.2, 5.2);
console.log('random4--->', random4);
//random4---> 2.9521989496937087