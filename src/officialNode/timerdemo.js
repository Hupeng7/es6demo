"use strict";

/**
 * 定时器 timer
 */
const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);

setImmediatePromise('foobar').then((value) => {
    // value === 'foobar' 传值是可选的
    // 在所有I/O 回调之后执行
    console.log('value is :', value);
});

// 或适用异步功能
async function timeExample() {
    console.log('在 I/O 回调之前');
    await setImmediatePromise();
    console.log('在 I/O 回调之后');
}

timeExample();

// setTimeout(callback, delay[, ...args])
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(2000, 'foobar').then((value) => {
    // value === 'foobar' 传值是可选的
    console.log('大约2000 毫秒后执行', value);
})

// 取消定时器























