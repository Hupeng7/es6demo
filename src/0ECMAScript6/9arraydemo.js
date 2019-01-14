"use strict";

/*
定义
数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。
 */
var arr1 = ['a', 'b', 'c'];

/*
数组的本质
本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object。
 */
console.log(typeof [1, 2, 3]);

console.log(Object.keys(arr1));

arr1[9] = 'd';
console.log(arr1.length);

/*
上面代码表示，数组的数字键不需要连续，length属性的值总是比最大的那个整数键大1。另外，这也表明数组是一种动态的数据结构，可以随时增减数组的成员。

length属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到length设置的值。

var arr = [ 'a', 'b', 'c' ];
arr.length // 3

arr.length = 2;
arr // ["a", "b"]
上面代码表示，当数组的length属性设为2（即最大的整数键只能是1）那么整数键2（值为c）就已经不在数组中了，被自动删除了。

清空数组的一个有效方法，就是将length属性设为0。
 */
var arr1 = ['a', 'b', 'c'];
arr1.length = 0;
console.log(arr1);













