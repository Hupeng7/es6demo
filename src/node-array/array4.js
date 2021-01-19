"use strict";

/**
 * array  methods
 */

// concat() 连接两个数组并且返回一个新的数组
let myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
console.log('myArray1--->', myArray);

// join(deliminator = ',') 将数组的所有元素连接成一个字符串
let myArray1 = new Array("Wind", "Rain", "Fire");
let list1 = myArray1.join("-");
console.log('list1--->', list1);

// push() 在数组末尾添加一个或多个元素，并返回数组操作后的长度
myArray.push("4");
console.log('myArray--->', myArray);

// pop() 从数组移出最后一个元素，并返回该元素
let last = myArray.pop();
console.log('last--->', last);

// shift() 从数组移出第一个元素，并返回该元素
let first = myArray.shift();
console.log('first--->', first);

// unshift() 在数组开头添加一个或多个元素，并返回数组的新长度
console.log('myArray before--->', myArray);
myArray.unshift("77", "88");
console.log('myArray after--->', myArray);

// slice(start_index,upto_index) 从数组提取一个片段，并作为一个新数组返回
console.log('myArray before--->', myArray);
myArray = myArray.slice(1, 4);
console.log('myArray after--->', myArray);

// splice(index,count_to_remove,addElement1,addElement2,...) 从数组移出一些元素，（可选）并替换他们
console.log('myArray before--->', myArray);
myArray.splice(1, 3, "a", "b", "c", "d");
console.log('myArray after--->', myArray);

// reverse() 颠倒数组元素的顺序：第一个变成最后一个，最后一个变成第一个
console.log('myArray before--->', myArray);
myArray.reverse();
console.log('myArray after--->', myArray);

// sort() 给数组元素排序
console.log('myArray before--->', myArray);
myArray.sort();
console.log('myArray after--->', myArray);

myArray = ["b", "c", "a"];
var sortFn = function (a, b) {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0
}
console.log('myArray before--->', myArray);
myArray.sort(sortFn);
console.log('myArray after--->', myArray);
