"use strict";

/**
 * js中常用到的循环遍历，过滤，筛选
 */

var p = 0;
for (var i = 0; i < 5; i++) {
    p += i;
}
console.log('p--->', p);

var p1 = ['a', 'b', 'c'];
var i = 0;
for (; i < p1.length; i++) {
    console.log('p1--->', p1[i]);
}

let i1 = 0;
for (; i1 < p1.length;) {
    console.log('p1 v1--->', p1[i1]);
    i1++;
    if (i1 === 10) break;
}

/**
 * 语法：
for (变量 in 对象)
{
在此执行代码
}
“变量”用来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
建议：如果是遍历普通数组的话，用for是最好的选择，但是如果是对象，就for in就好了。
 */

for (var x in p1) {
    console.log('for in x--->', x);
}
var obj = {
    name: "lisa",
    age: 12,
    job: "teacher",
    speak: function () {
        return this.job + this.name;
    }
}
for (var j in obj) {
    console.log('for in obj--->', j);
}

/**
 * for/of
for…of读取的是键值，如下例子：
 */
var m = ["a", "b", "c"];
for (var i of m) {
    console.log('for of i--->', i);
}

/**
 * 注：for/of不能遍历对象，会报错。
与其他遍历语法的比较
for…in循环有几个缺点
①数组的键名是数字，但是for…in循环是以字符串作为键名“0”、“1”、“2”等等。
②for…in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
③某些情况下，for…in循环会以任意顺序遍历键名。
for…in循环主要是为遍历对象而设计的，不适用于遍历数组。

for…of循环
有着同for…in一样的简洁语法，但是没有for…in那些缺点。
不同于forEach方法，它可以与break、continue和return配合使用。
提供了遍历所有数据结构的统一操作接口。
————————————————
 */
i = 0;
while (i < 5) {
    x = x + "The number is " + i + "<br>";
    i++;
    console.log('while x --->', x);
    console.log('while x --->', 1);
}






















