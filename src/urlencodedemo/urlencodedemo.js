"use strict";
var urlencode = require('urlencode');


/**
 * url编解码
 */
//%e3%80%90%e9%93%b6%e9%97%aa%e5%af%8c%e3%80%91
console.log(urlencode('【银闪富】', 'utf8'));
console.log(urlencode('【银闪富】', 'gbk'));
//%E3%80%90%E9%93%B6%E9%97%AA%E5%AF%8C%E3%80%91
//%A1%BE%D2%F8%C9%C1%B8%BB%A1%BF

console.log(urlencode.decode('%e3%80%90%e9%93%b6%e9%97%aa%e5%af%8c%e3%80%91', 'utf8'));

let urlencodeparse1 = urlencode.parse('name=%e3%80%90%e9%93%b6%e9%97%aa%e5%af%8c%e3%80%91', { charset: 'utf8' });
console.log('urlencodeparse1---', urlencodeparse1);

// var str = 'x[y][0][v][w]=' + urlencode('悟空', 'gbk');
// var obj = { 'x': { 'y': [{ 'v': { 'w': '悟空' } }] } };
// let urlencode1 = urlencode.stringify(obj, { charset: 'gbk' }).equal(str);

console.log('urlencode1---', urlencode1);