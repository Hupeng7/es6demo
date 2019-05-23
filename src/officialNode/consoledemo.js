"use strict";
const fs = require('fs');
const { Console } = require('console');

console.log('你好世界');
console.log('你好%s', '世界');
console.error(new Error('错误信息'));

const name = "描述";
console.warn(`警告${name}`);

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器
const logger = new Console({ stdout: output, stderr: errorOutput });
// 像控制台一样使用它
const count = 5;
logger.log('count: %d', count);

// console.assert(value[,..message])
console.assert(true, '什么都不做');

console.assert(false, '%s 工作', '无法');

// console.count([label])
console.count();
console.count('default')
console.count('abc');
console.count('xyz');
console.count('abc');
console.count();

console.count('abc');
console.countReset('abc');
console.count('abc');

// console.error([data][,...args])
const code = 5;
console.error('error #%d', code);
console.error('error', code);

// console.log([data][,...args])
console.log("计数: %d", count);

console.log('计数:', count);

// console.table(tabularData[,properties])
console.table(Symbol());

console.table(undefined);

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a', 'b', 'c']);

// console.time([label])
// console.timeEnd([label])
console.time('100-elements');
for (let i = 1000; i < 1000; i--) { }
console.timeEnd('100-elements');

// console.timeLog([label[,...data]])
console.time('process');
// const value = expensiveProcess1();
console.timeLog('process', 42);
// doExpensiveProcess2(value);
console.timeEnd('process');

// console.trace([message][,...args])
console.trace('展示');

// console.profile([label])
console.profile('MyLabel');
console.profileEnd('MyLabel');


