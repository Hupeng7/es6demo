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
function flen(a,b) {
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




















