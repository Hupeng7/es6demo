"use strict";

const util = require('util');

async function fn() {
    return "hello world";
}
const callbackFunction = util.callbackify(fn);
callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
})

/**
 * util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。

第一个参数是一个字符串，包含零个或多个占位符。 每个占位符会被对应参数转换后的值所替换。 支持的占位符有：

%s - 字符串。
%d - 数值（整数或浮点数）。
%i - Integer.
%f - Floating point value.
%j - JSON。如果参数包含循环引用，则用字符串 '[Circular]' 替换。
%o - Object. 
%O - Object. 
%% - 单个百分号（'%'）。不消耗参数。
 */
var var1 = util.format('%s:%s', 'foo');
console.log('var1---', var1);
var var2 = util.format('%s:%s', 'foo', 'bar', 'baz');
console.log('var2---', var2);
// var1--- foo:%s
// var2--- foo:bar baz

//如果第一个参数不是一个字符串，则 util.format() 返回一个所有参数用空格分隔并连在一起的字符串。 每个参数都使用 util.inspect() 转换为一个字符串。
var var3 = util.format(1, 2, 3);
console.log('var3---', var3);
//var3--- 1 2 3

//If only one argument is passed to util.format(), it is returned as it is without any formatting.
var var4 = util.format('%% %s');
console.log('var4---', var4);
// var4--- %% %s

console.log();

const { inspect } = require('util');
const assert = require('assert');

const o1 = {
    b: [2, 3, 1],
    a: '`a` comes before `b`',
    c: new Set([2, 3, 1])
};

console.log(inspect(o1, { sorted: true }));
// { a: '`a` comes before `b`', b: [ 2, 3, 1 ], c: Set { 1, 2, 3 } }

console.log(inspect(o1, { sorted: (a, b) => b.localeCompare(a) }));
// { c: Set { 3, 2, 1 }, b: [ 2, 3, 1 ], a: '`a` comes before `b`' }

const o2 = {
    c: new Set([2, 1, 3]),
    a: '`a` comes before `b`',
    b: [2, 3, 1]
}

assert.strict.equal(
    inspect(o1, { sorted: true }),
    inspect(o2, { sorted: true })
)





