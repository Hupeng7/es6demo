"use strict";

/**
 * Set 对象
Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

Set 中的特殊值
Set 对象存储的值总是唯一的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：

+0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；
undefined 与 undefined 是恒等的，所以不重复；
NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复。
 */

let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // 这里体现了值的唯一性
mySet.add("some text"); // Set(3) {1, 5, "some text"} 这里体现了类型的多样性
var o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });
console.log('my Set---', mySet);  // 这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储

// 类型转换
// Array 转 Set
var mySet1 = new Set(["value1", "value2", "value3"]);
console.log('mySet1---', mySet1);
var myArray1 = [...mySet1];
console.log('myArray1---', myArray1);

// String 转 Set
var mySet2 = new Set('hello');
console.log('mySet2---', mySet2);

// Set对象作用
// 数组去重
var mySet3 = new Set([1, 2, 3, 4, 4]);
var myArray3 = [...mySet3];
console.log('myArray3---', myArray3);

// 并集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]);
console.log('union---', union);

// 交集
var intersect = new Set([...a].filter(x => b.has(x)));
console.log('intersect---', intersect);

// 差集
var difference = new Set([...a].filter(x => !b.has(x)));
console.log('difference---', difference);







