"use strict";

function multiply(a, b) {
    b = (typeof b !== 'undefined') ? b : 1;
    return a * b;
}
const result1 = multiply(5);
console.log('result1--->', result1);

// 使用默认参数，在函数体的检查就不再需要了。现在，你可以在函数头简单地把1设定为b的默认值：
function multiply1(a, b = 1) {
    return a * b;
}
const result2 = multiply1(5);
console.log('result2--->', result2);

function multiply2(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}

/**
 * 剩余参数
剩余参数语法允许将不确定数量的参数表示为数组。在下面的例子中，使用剩余参数收集从第二个到最后参数。
然后，我们将这个数组的每一个数与第一个参数相乘。这个例子是使用了一个箭头函数，这将在下一节介绍。
 */
const result3 = multiply2(2, 1, 2, 3);
console.log('result3--->', result3);

/**
 * 箭头函数
箭头函数表达式（也称胖箭头函数）相比函数表达式具有较短的语法并以词法的方式绑定 this。箭头函数总是匿名的。
另见 hacks.mozilla.org 的博文：“深度了解ES6：箭头函数”。
有两个因素会影响引入箭头函数：更简洁的函数和 this。
 */
const a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];
const a2 = a.map(function (s) { return s.length });
console.log('a2--->', a2);

const a3 = a.map(s => s.length);
console.log('a3--->', a3);






