"use strict";
var moment = require('moment');
var path = require('path');

let nowFormat = moment().format('YYYYMMDD');
let orderId = 'L01';
let originalname = "haha.img";
var newpath = path.join(nowFormat, orderId, originalname);

console.log('newpath 111---', newpath);

newpath = newpath.replace(/\\/g, '/');
console.log('new path222---', newpath);

let a = "hhhhfsdadsahh";
let b = a.replace(/h/g, 'p');
console.log('b---', b);