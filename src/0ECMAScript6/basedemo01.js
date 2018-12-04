"use strict";

var a = 1 + 3;

// 分号前面可以没有任何内容，JavaScript 引擎将其视为空语句。
;
;
;

/*
变量提升
JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，
然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，
都会被提升到代码的头部，这就叫做变量提升（hoisting）。
 */

console.log(a1);
var a1 = 1;

// 等同于
// var a;
// console.log(a); // undefined
// a = 1;

/*
typeof 运算符
JavaScript 有三种方法，可以确定一个值到底是什么类型。

typeof运算符
instanceof运算符
Object.prototype.toString方法
 */

console.log(typeof 123);
console.log(typeof '123');
console.log(typeof false);

console.log(typeof undefined);
console.log(typeof v);

/*
上面代码中，变量v没有用var命令声明，直接使用就会报错。
但是，放在typeof后面，就不报错了，而是返回undefined。

实际编程中，这个特点通常用在判断语句。
 */
//正确写法
if (typeof v === "undefined") {
    //todo
    console.log('v is undefined');
}

//对象返回 object
console.log(typeof window);
console.log(typeof {});
console.log(typeof []);

var o1 = {};
var a1 = [];
console.log(o1 instanceof Array); // false
console.log(a1 instanceof Array); // true

// null 返回 object
console.log(typeof null);

/*
用法和含义
对于null和undefined，大致可以像下面这样理解。
null表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，
表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，
那么这个参数就会传入null，表示未发生错误。

undefined表示“未定义”，下面是返回undefined的典型场景。
// 变量声明了，但没有赋值
var i;
i // undefined
// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined
// 对象没有赋值的属性
var  o = new Object();
o.p // undefined
// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
 */

/*
转换规则是除了下面六个值被转为false，其他值都视为true。

undefined
null
false
0
NaN
""或''（空字符串）
 */

if ('') {
    console.log('true');
}
//没有任何输出

//注意 空数组[] 和空对象{} 对应的布尔值  都是true
if ([]) {
    console.log('[] is true');
}
if ({}) {
    console.log('{} is true');
}





