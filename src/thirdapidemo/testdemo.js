"use strict"

var TypeDemo = require('./typedemo');
var DateDemo = require('./datedemo');
var ArrayDemo = require('./arraydemo');
var StringDemo = require('./stringdemo');
var NumberDemo = require('./numberdemo');

const str = "hello";
console.log('check type--->', TypeDemo.isString(str));

const now = DateDemo.formatTime(new Date());
console.log('now --->', now);
const now1 = DateDemo.getMonths('2018-1-29', 3, 3);
console.log('now1--->', now1);
const now2 = DateDemo.getDays(new Date(), 2, 3);
console.log('now2--->', now2);

const array1 = [1, 2, 3, 2, 4]
console.log('array1--->', ArrayDemo.contains(array1, 12));

const array2 = ArrayDemo.sort(array1, 2);
console.log('array2--->', array2);

const array3 = ArrayDemo.unique(array1);
console.log('array3--->', array3);

const string1 = StringDemo.checkPwd('hdhasS1122-ss');
console.log('string1--->', string1);

const number1 = NumberDemo.numberToChinese('2312321321');
console.log('number1--->', number1);

let string2 = "hehadaijd.jpg";
console.log('string2---', string2.lastIndexOf('.'));
console.log('string2-1---',string2.substr(string2.lastIndexOf('.')));



