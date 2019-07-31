"use strict";

var myMap = new Map();
var keyString = "a string";

/**
 * Map 对象
Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

Maps 和 Objects 的区别
一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。
Map 中的 key
key 是字符串
 */
myMap.set(keyString, "和键'a string'关联的值");
var m1 = myMap.get(keyString);
console.log('m1---', m1);
var m2 = myMap.get('a string');
console.log('m2---', m2);

// key是函数
var keyFunc = function () { }; // 函数
myMap.set(keyFunc, "和键 keyFunc 关联的值");
var m3 = myMap.get(keyFunc);
console.log('m3---', m3);
var m4 = myMap.get(function () { });
console.log('m4---', m4);

//key 是对象
var keyObj = {};
myMap.set(keyObj, "和键 keyObj 关联的值");
var m5 = myMap.get(keyObj);
console.log('m5---', m5);
var m6 = myMap.get({});
console.log('m6---', m6);

//key是NaN
myMap.set(NaN, "not a number");
var m7 = myMap.get(NaN);
console.log('m7---', m7);
var m8 = myMap.get(Number("foo"));
console.log('m8---', m8);
// 虽然 NaN 和任何值甚至和自己都不相等(NaN !== NaN 返回true)，NaN作为Map的键来说是没有区别的。

/**
 * Map 的迭代
对 Map 进行遍历，以下两个最高级。
for...of
 */
var myMap1 = new Map();
myMap1.set(0, "zero");
myMap1.set(1, "one");
for (var [key, value] of myMap1) {
    console.log(key + " = " + value);
}

for (var [key, value] of myMap1.entries()) {
    console.log(key + " = " + value);
}

for (var key of myMap1.keys()) {
    console.log(key);
}

for (var value of myMap1.values()) {
    console.log(value);
}

// forEach()
myMap1.forEach(function (value, key) {
    console.log(key + " = " + value);
}, myMap1)

// Map对象的操作
// Map 与Array 的转换
var kvArray = [["key1", "value1"], ["key2", "value2"]];
//
var myMap2 = new Map(kvArray);
myMap2.forEach((value, key) => {
    console.log(key + "= " + value);
});
var outArray = Array.from(myMap2);
console.log("outArray---", outArray);

// Map克隆
var original = new Map([["key1", "value1"], ["key2", "value2"]]);
var clone = new Map(original);
console.log(original === clone);

// Map合并
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
var second = new Map([[1, 'uno'], [2, 'dos']]);
var merged = new Map([...first, ...second]);
merged.forEach((value, key) => {
    console.log(key + " = " + value);
})