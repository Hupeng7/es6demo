"use strict";

/*
函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。
函数的声明
JavaScript 有三种声明函数的方法。

（1）function 命令

function命令声明的代码区块，就是一个函数。function命令后面是函数名，函数名后面是一对圆括号，
里面是传入函数的参数。函数体放在大括号里面。

function print(s) {
  console.log(s);
}
上面的代码命名了一个print函数，以后使用print()这种形式，就可以调用相应的代码。
这叫做函数的声明（Function Declaration）。

（2）函数表达式

除了用function命令声明函数，还可以采用变量赋值的写法。

var print = function(s) {
  console.log(s);
};
这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。

采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

var print = function x(){
  console.log(typeof x);
};

x
// ReferenceError: x is not defined

print()
// function
上面代码在函数表达式中，加入了函数名x。这个x只在函数体内部可用，指代函数表达式本身，其他地方都不可用。
这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，
而不再显示这里是一个匿名函数）。因此，下面的形式声明函数也非常常见。

var f = function f() {};
需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。
总的来说，这两种声明函数的方式，差别很细微，可以近似认为是等价的。

（3）Function 构造函数

第三种声明函数的方式是Function构造函数。

var add = new Function(
  'x',
  'y',
  'return x + y'
);

// 等同于
function add(x, y) {
  return x + y;
}
上面代码中，Function构造函数接受三个参数，除了最后一个参数是add函数的“函数体”，其他参数都是add函数的参数。

你可以传递任意数量的参数给Function构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。

var foo = new Function(
  'return "hello world";'
);

// 等同于
function foo() {
  return 'hello world';
}
Function构造函数可以不使用new命令，返回结果完全一样。
总的来说，这种声明函数的方式非常不直观，几乎无人使用。

函数的重复声明
如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。

function f() {
  console.log(1);
}
f() // 2

function f() {
  console.log(2);
}
f() // 2
上面代码中，后一次的函数声明覆盖了前面一次。而且，由于函数名的提升（参见下文），
前一次声明在任何时候都是无效的，这一点要特别注意。

圆括号运算符，return 语句和递归
调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。

function add(x, y) {
  return x + y;
}

add(1, 1) // 2
上面代码中，函数名后面紧跟一对圆括号，就会调用这个函数。

函数体内部的return语句，表示返回。JavaScript 引擎遇到return语句，就直接返回return后面的那个表达式的值，后面即使还有语句，也不会得到执行。也就是说，return语句所带的那个表达式，就是函数的返回值。return语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回undefined。

函数可以调用自身，这就是递归（recursion）。下面就是通过递归，计算斐波那契数列的代码。
 */

function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 2) + fib(num - 1);
}

var result = fib(6); // 8
console.log('fib(6) is result is: ', result);

/*
第一等公民
JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。
凡是可以使用值的地方，就能使用函数。比如，可以把函数赋值给变量和对象的属性，
也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

由于函数与其他数据类型地位平等，所以在 JavaScript 语言中又称函数为第一等公民。
 */

function add1(x, y) {
    return x + y;
}

//将函数赋值给一个变量
var operator = add1;

//将函数作为参数和返回值
function a(operator) {
    return operator;
}

console.log(a(add1)(1, 1)); // 2

/*
函数的属性和方法
name 属性
函数的name属性返回函数的名字。
 */
function f1() {
}

console.log('f1 is name is: ', f1.name);
var f2 = function () {
};
console.log('f2 is name is: ', f2.name);

var f3 = function myName() {
};
console.log('f3 is name is: ', f3.name);

/*
上面代码中，f3.name返回函数表达式的名字。注意，真正的函数名还是f3，而myName这个名字只在函数体内部可用。

name属性的一个用处，就是获取参数函数的名字。
 */

var myFunc = function () {
};

function test(f) {
    console.log(f.name);
}

test(myFunc); // myFunc

/*
length 属性
函数的length属性返回函数预期传入的参数个数，即函数定义之中的参数个数。
上面代码定义了空函数f，它的length属性就是定义时的参数个数。不管调用时输入了多少个参数，
length属性始终等于2。
length属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的”方法重载“（overload）。
 */
function flen(a, b) {
}

console.log(flen.length); // 2

/*
toString()
函数的toString方法返回一个字符串，内容是函数的源码。
 */
function fToString() {
    a();
    b();
    c();
}

console.log(fToString.toString());

/*
函数内部的变量提升
与全局作用域一样，函数作用域内部也会产生“变量提升”现象。
var命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。
 */
function fooX(x) {
    if (x > 100) {
        var tmp = x - 100;
    }
}

//等同于
function fooX1(x) {
    var tmp;
    if (x > 100) {
        tmp = x - 100;
    }
    ;
}

/*
函数本身的作用域
函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，
与其运行时所在的作用域无关。
 */
var a33 = 1;
var x33 = function () {
    console.log(a33);
};

function f33() {
    var a33 = 2;
    x33();
}

f33(); // 1

/*
概述
函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。
 */
function square(x) {
    return x * x;
};
console.log(square(2)); // 4
console.log(square(3)); // 9

/*
传递方式
函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。
这意味着，在函数体内修改参数值，不会影响到函数外部。

var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2
上面代码中，变量p是一个原始类型的值，传入函数f的方式是传值传递。
因此，在函数内部，p的值是原始值的拷贝，无论怎么修改，都不会影响到原始值。

但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。
也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。
 */

var obj6 = { p: 1 };

function f6(obj6) {
    obj6.p = 2;
}

f6(obj6);
console.log(obj6.p); // 2

var obj7 = [1, 2, 3];

function f7(obj7) {
    obj7 = [2, 3, 4];
    console.log('obj7---', obj7);  // obj7--- [ 2, 3, 4 ]
}

f7(obj7);
console.log(obj7);

/*
同名参数
如果有同名的参数，则取最后出现的那个值。

function f(a, a) {
  console.log(a);
}

f(1, 2) // 2
上面代码中，函数f有两个参数，且参数名都是a。取值的时候，以后面的a为准，即使后面的a没有值或被省略，
也是以其为准。
 */

/*
arguments 对象
（1）定义

由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。
这就是arguments对象的由来。

arguments对象包含了函数运行时的所有参数，arguments[0]就是第一个参数，arguments[1]就是第二个参数，
以此类推。这个对象只有在函数体内部，才可以使用。

var f = function (one) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

f(1, 2, 3)
// 1
// 2
// 3
正常模式下，arguments对象可以在运行时修改。

var f = function(a, b) {
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}

f(1, 1) // 5
上面代码中，函数f调用时传入的参数，在函数内部被修改成3和2。

严格模式下，arguments对象是一个只读对象，修改它是无效的，但不会报错。

var f = function(a, b) {
  'use strict'; // 开启严格模式
  arguments[0] = 3; // 无效
  arguments[1] = 2; // 无效
  return a + b;
}

f(1, 1) // 2
上面代码中，函数体内是严格模式，这时修改arguments对象就是无效的。

通过arguments对象的length属性，可以判断函数调用时到底带几个参数。

function f() {
  return arguments.length;
}

f(1, 2, 3) // 3
f(1) // 1
f() // 0
 */

/*
与数组的关系

需要注意的是，虽然arguments很像数组，但它是一个对象。数组专有的方法（比如slice和forEach），
不能在arguments对象上直接使用。

如果要让arguments对象使用数组方法，真正的解决方法是将arguments转为真正的数组。
下面是两种常用的转换方法：slice方法和逐一填入新数组。
 */

//var args = Array.prototype.slice.call(arguments);

// var args = [];
// for (let i = 0, len = arguments.length; i < len; i++) {
//     args.push(arguments[i]);
// }

/*
闭包最大的特点，就是它可以“记住”诞生的环境，比如f2记住了它诞生的环境f1，所以从f2可以得到f1的内部变量。
在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，
即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。
 */

function craeteIncrementor(start) {
    return function () {
        console.log(start++);
    };
}

var inc = craeteIncrementor(5);
inc(); // 5
inc(); // 6
inc(); // 7

//闭包的另一个用处，是封装对象的私有属性和私有方法。
function Person7(name) {
    var _age;

    function setAge(n) {
        _age = n;
    }

    function getAge() {
        return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}

var person7 = Person7('sam');
person7.setAge(25);
person7.getAge(); // 25

/*
eval 命令
基本用法
eval命令接受一个字符串作为参数，并将这个字符串当作语句执行。
 */
eval('var a8 = 1;');
//console.log(a8);
console.log(eval(123));


// 函数参数的扩展
// 基本用法
function fn(name, age = 17) {
    console.log(name + "," + age);
}
fn("Amy", 18);
fn("Amy", "");
fn("Amy");

// 只有在未传递参数，或者参数为 undefined 时，才会使用默认参数，null 值被认为是有效的值传递。
fn("Amy", null);

//函数参数默认值存在暂时性死区，在函数参数默认值表达式中，还未初始化赋值的参数值无法作为其他参数的默认值。
function f(x, y = x) {
    console.log(x, y);
}
f(1); // 1 1

function f(x = y) {
    console.log(x);
}
// f(); // ReferenceError: y is not defined

/**
 * 不定参数
不定参数用来表示不确定参数个数，形如，...变量名，由...加上一个具名参数标识符组成。
具名参数只能放在参数组的最后，并且有且只有一个不定参数。
基本用法
 */
function f(...values) {
    console.log(values.length);
}
f(1, 2);
f(1, 2, 3, 4);

// 箭头函数
// 箭头函数提供了一种更加简洁的函数书写方式。基本语法是：
// 参数 => 函数体
// 基本用法
var f10 = v => v;
// 等价于
var f11 = function (a) {
    return a;
}
f10(1);

// 箭头函数没有参数或者有多个参数  要用() 括起来
var f12 = (a, b) => { console.log(a + b) };
f12(6, 2);

// 当箭头函数要返回对象的时候 为了区分于代码块 要用()将对象包裹起来
// 报错
// var f13 = (id, name) => { id: id, name:name };

// 不报错
var f13 = (id, name) => ({ id: id, name: name });
f13(6, 2);

// 注意点：没有 this、super、arguments 和 new.target 绑定。
var func = () => {
    // 箭头函数里面没有 this 对象，
    // 此时的 this 是外层的 this 对象，即 Window 
    console.log(this);
}
func(55);

var func = () => {
    console.log(arguments);
}
// func(55);
// 箭头函数体中的this 对象 是定义函数时的对象 而不是使用函数时的对象
function fn2() {
    setTimeout(() => {
        // 定义时 this绑定的是 fn 中的this对象
        console.log(this.a1);
    }, 0)
}
var a1 = 20;
// fn 的this 对象为{a:19}
fn2.call({ a1: 18 });
// 不可以作为构造函数 也就是不能使用new 命令 否则会报错

/**
 * 适合使用的场景
ES6 之前，JavaScript 的 this 对象一直很令人头大，回调函数，经常看到 var self = this 这样的代码，
为了将外部 this 传递到回调函数中，那么有了箭头函数，就不需要这样做了，直接使用 this 就行。
 */
// 回调函数
// var Person1 = {
//     'age1': 18,
//     'sayHello': function () {
//         setTimeout(function () {
//             console.log(this.age1);
//         });
//     }
// };
// var age1 = 20;
// Person1.sayHello();


var haha = {
    'age': 181,
    'sayHello': function () {
        setTimeout(function () {
            console.log('hello ');
            console.log(this.age);
        });
    }
};
//var age = 20;
haha.sayHello();  // 20

var haha1 = {
    'age': 18,
    'sayHello': function () {
        setTimeout(() => {
            console.log(this.age);
        });
    }
};
var age = 20;
haha1.sayHello();



























