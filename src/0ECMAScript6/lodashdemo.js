"use strict";

//lodash是一套工具库，内部封装了很多字符串、数组、对象等常见数据类型的处理函数。
// 官网 https://www.lodashjs.com/docs/4.17.5.html#now
//import _ from 'lodash';
const _ = require('lodash');

console.log('_.concat 拼接数组');
var array = [1];
var other = _.concat(array, 2, [3], [4]);

console.log(other);
console.log(array);

console.log('_.chunk  将数组进行切分。这个函数把数组按照一定的长度分开，返回新的数组。（片段化数组）');
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(_.chunk(arr, 2));


console.log('compact，去除假值。（将所有的空值，0，NaN过滤掉）对应的还有一个数组去重函数，这在实际的开发中很有作用。');
console.log(_.compact(['1', '2', '', 0]));

console.log('uniq，数组去重。（将数组中的对象去重，只能是数组去重，不能是对象去重。）');
console.log(_.uniq([1, 1, 3]));

console.log('filter和reject，过滤集合，传入匿名函数。（二者放在一起讨论的原因是，两个函数类似但返回的值是相反。）');
console.log(_.filter([1, 2], x => x == 1));
console.log(_.reject([1, 2], x => x == 1));

console.log('map和forEach，数组遍历。（相似）简单说一下不同点就是，map的回调函数中是支持return返回值的 不过二者都不改变原来的数组。');
// 推荐使用map
console.log(_.map([1, 2], x => x + 1));

console.log('6.merge,参数合并。（merge函数像是Git的merge分支操作一样，将两个参数合并在一起。）\n' +
    '\n' +
    '官网的解释是，递归的将源对象和继承的可枚举字符串监控属性合并到目标对象中。源对象从左到右引用，后续来源将覆盖以前来源的属性分配。');
var object = {
    'a': [{'b': 2}, {'d': 4}]
};

var other1 = {
    'a': [{'c': 3}, {'e': 5}]
};
console.log(_.merge(object, other1));

console.log('extend，类似参数对象合并。');

function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log(_.assignIn({'a': 0}, new Foo(), new Bar()));

console.log('keys ，取出对象中所有的key值组成新的数组。');

function Foo1() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;
console.log(_.keys(new Foo1));

console.log(_.keys('hi'));

console.log('_.now()');
console.log(_.now());











