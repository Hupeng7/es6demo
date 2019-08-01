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

// Array.from()
// 将类数组对象或可迭代对象转化为数组
// 参数为数组 返回与原数组一样的数组
console.log(Array.from([1, 2]));
// 参数含空位
console.log(Array.from([1, , 3]));

console.log(Array.from([1, 2, 3], (n) => n * 2));

// thisArg
// 可选 用于指定map函数执行时的this对象
let map = {
    do: function (n) {
        return n * 2;
    }
}
let arrayLike = [1, 2, 3];
console.log(Array.from(arrayLike, function (n) {
    return this.do(n)
}, map));

// 类数组对象
// 一个类数组对象必须含有length属性 且元素属性必须是数值或者可转换为数值的字符
let arr = Array.from({
    0: '1',
    1: '2',
    2: 3,
    length: 3
});
console.log(arr);

// 没有length 属性，则返回空数组
let array = Array.from({
    0: '1',
    1: '2',
    2: 3
})
console.log(array);

// 元素属性名不为数值且无法转换为数值 返回长度为length 元素值为 undefined的数组
let array1 = Array.from({
    a: 1,
    b: 2,
    length: 2
});
console.log(array1);






