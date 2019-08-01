"use strict";

/*
生成方法
对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。
什么是对象？简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。
 */

var obj = {
    foo: 'Hello',
    bar: 'World'
};

// 报错
// var obj1 = {
//     1p: 'Hello World'
// }
//不报错
var obj2 = {
    '1p': 'Hello World',
    'h w': 'Hello World',
    'p+q': 'Hello World'
}

//如果属性的值还是一个对象，就形成了链式引用。
var o1 = {};
var o2 = { bar: 'hello' };
o1.foo = o2;
console.log(o1.foo.bar); // "hello"

console.log(eval('{foo:123}'));
console.log(eval('({foo:123})'));

/*
属性的操作
属性的读取
读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。
 */
var obj2 = {
    p: 'Hello World',
    123: 'new hello world'
};
console.log(obj2.p);
console.log(obj2['p']);
//注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。
// obj2.123  // 报错
console.log(obj2[123]);

/*
属性的赋值
点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。
 */
obj2.foo = 'Hello';
obj2['bar'] = 'World';
console.log(obj2);

/*
属性的查看
查看一个对象本身的所有属性，可以使用Object.keys方法。
 */
console.log(Object.keys(obj2));

//属性的删除：delete 命令
//delete命令用于删除对象的属性，删除成功后返回true。

/*
属性是否存在：in 运算符
in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），
如果包含就返回true，否则返回false。它的左边是一个字符串，表示属性名，右边是一个对象。
 */
console.log('p' in obj2);

/*
属性的遍历：for...in 循环
for...in循环用来遍历一个对象的全部属性。
 */
for (var i in obj2) {
    console.log('键名: ', i);
    console.log('键值: ', obj2[i]);
}
/*
上面代码中，对象obj继承了toString属性，该属性不会被for...in循环遍历到，因为它默认是“不可遍历”的。
关于对象属性的可遍历性，参见《标准库》章节中 Object 一章的介绍。

如果继承的属性是可遍历的，那么就会被for...in循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性，
所以使用for...in的时候，应该结合使用hasOwnProperty方法，在循环内部判断一下，某个属性是否为对象自身的属性。
 */
for (var key in obj2) {
    if (obj2.hasOwnProperty(key)) {
        console.log('key is: ', key);
        console.log('value is: ', obj2[key]);
    }
}

/*
with 语句
with语句的格式如下：

with (对象) {
  语句;
}
它的作用是操作同一个对象的多个属性时，提供一些书写的方便。
 */
var obj3 = {
    p1: 1,
    p2: 2,
};

// with (obj3) {
//     p1 = 4;
//     p2 = 5;
// }

/**
 * 对象的新方法
Object.assign(target, source_1, ···)
用于将源对象的所有可枚举属性复制到目标对象中。

基本用法
 */
let target = { a: 1 };
let object2 = { b: 2 };
let object3 = { c: 3 };
Object.assign(target, object2, object3);
console.log('target---', target);

// 注意点
//assign 的属性拷贝是浅拷贝:
let sourceObj = { a: { b: 1 } };
let targetObj = { c: 3 }
Object.assign(targetObj, sourceObj);
targetObj.a.b = 2;
console.log(sourceObj.a.b);

// 同名属性替换
targetObj = { a: { b: 1, c: 2 } };
sourceObj = { a: { b: "hh" } };
Object.assign(targetObj, sourceObj);
console.log(targetObj);

// 数组的处理
console.log(Object.assign([2, 3], [5]));
// 会将数组处理成对象，所以先将 [2,3] 转为 {0:2,1:3} ，然后再进行属性复制，所以源对象的 0 号属性覆盖了目标对象的 0。

/**
 * Object.is(value1, value2)
用来比较两个值是否严格相等，与（===）基本类似。

基本用法
 */
console.log(Object.is("q", "q"));
console.log(Object.is(1, 1));
console.log([1], [1]);
console.log({ q: 1 }, { q: 1 });

// 与 （===）的区别
//  +0 不等于 -0
console.log(Object.is(+0, -0)); // false
console.log(+0 === -0);  //true
// NaN 等于本身
console.log(Object.is(NaN, NaN));  // true
console.log(NaN === NaN);   // false


