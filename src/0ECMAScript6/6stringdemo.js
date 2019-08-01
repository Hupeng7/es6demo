"use strict";

/*
定义
字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。
单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。
 */
var longString = 'Long \
 long \
 long \
 string';

var longString1 = 'Long'
    + 'long '
    + 'long '
    + 'string ';

//如果想输出多行字符串，有一种利用多行注释的变通方法。
var string2 = (function () {/*
    line1
    line2
    line3
    */
}).toString().split('\n').slice(1, -1).join('\n');
console.log(string2);

/*
转义
反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

需要用反斜杠转义的特殊字符，主要有下面这些。

\0 ：null（\u0000）
\b ：后退键（\u0008）
\f ：换页符（\u000C）
\n ：换行符（\u000A）
\r ：回车键（\u000D）
\t ：制表符（\u0009）
\v ：垂直制表符（\u000B）
\' ：单引号（\u0027）
\" ：双引号（\u0022）
\\ ：反斜杠（\u005C）
上面这些字符前面加上反斜杠，都表示特殊含义。
 */
console.log('1\n2');

//console.log('\251');
console.log('\xA9');
console.log('\u0049');

//console.log('\172' === 'z');
console.log('\x7A' === 'z');
console.log('\u007A' === 'z');

console.log('Prev \\ Next');

/*
字符串与数组
字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。
 */
var s = 'hello';
console.log(s[0]);
console.log(s[1]);
console.log(s[4]);
console.log(s[5]); //undefined
//console.log(s[x]); // undefined

//但是，字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。
//delete s[0]; // s "hello"
//s[1] = 'a';  // s "hello"
//上面代码表示，字符串内部的单个字符无法改变和增删，这些操作会默默地失败。

//length属性返回字符串的长度，该属性也是无法改变的。
var len = s.length;
console.log(len);
//上面代码表示字符串的length属性无法改变，但是不会报错。

/*
字符集
JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。

JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，
即将字符写成\uxxxx的形式，其中xxxx代表该字符的 Unicode 码点。比如，\u00A9代表版权符号。
 */

/*
Base64 转码
有时，文本里面包含一些不可打印的符号，比如 ASCII 码0到31的符号都无法打印出来，这时可以使用 Base64 编码，
将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、+和/这64个字符组成的可打印字符。
使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

JavaScript 原生提供两个 Base64 相关的方法。

btoa()：任意值转为 Base64 编码
atob()：Base64 编码转为原来的值
var string6 = 'Hello World';
btoa(string6).toString();
atob('SGVsbG8gV29ybGQh');
 */
// function b64Encode(str) {
//     return btoa(encodeURIComponent(str));
// }
// function b64Decode(str) {
//     return decodeURIComponent(atob(str));
// }
// b64Encode("你好")//
// b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE');

// ES6 字符串
/**
 * 子串的识别
ES6 之前判断字符串是否包含子串，用 indexOf 方法，ES6 新增了子串的识别方法。

includes()：返回布尔值，判断是否找到参数字符串。
startsWith()：返回布尔值，判断参数字符串是否在原字符串的头部。
endsWith()：返回布尔值，判断参数字符串是否在原字符串的尾部。
以上三个方法都可以接受两个参数，需要搜索的字符串，和可选的搜索起始位置索引。
 */

let string = "apple,banana,orange";
let flag = string.includes("banana");
console.log('flag---', flag);
flag = string.startsWith("apple");
console.log('flag---', flag);
flag = string.endsWith("apple");
console.log('flag---', flag);
flag = string.startsWith("banana", 6);
console.log('flag---', flag);

//字符串重复
// repeat()：返回新的字符串，表示将字符串重复指定次数返回。
console.log("Hello,".repeat(2));
//如果参数是小数 向下取整
console.log("Hello,".repeat(3.2));
// 如果参数是 0 至 -1 之间的小数，会进行取整运算，0 至 -1 之间的小数取整得到 -0 ，等同于 repeat 零次
console.log("Hello,".repeat(-0.5));
// 如果参数是NaN 等同于repeat零次
console.log("Hello,".repeat(NaN));
// 如果参数是负数或者Infinity 会报错
//console.log("Hello,".repeat(-1)); //RangeError: Invalid count value
//console.log("Hello,".repeat(Infinity)); // RangeError: Invalid count value
//如果传入的参数是字符串 则会先将字符串转化为数字
console.log("Hello,".repeat("hh"));
console.log("Hello,".repeat("2"));

/**
 * 字符串补全
padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。
以上两个方法接受两个参数，第一个参数是指定生成的字符串的最小长度，
第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。
 */

console.log("h".padStart(5, "o"));
console.log("h".padEnd(5, "o"));
console.log("h".padStart(5));
// 如果指定的长度小于或者等于原字符串的长度 则返回原字符串
console.log("hello".padStart(5, "A"));
// 如果原字符串加上补全字符串长度大于指定长度 则截去超出位数的补全字符串
console.log("hello".padEnd(10, ",world"));
// 常用于补全位数
console.log("123".padStart(10, "0"));

/**
 * 模板字符串
模板字符串相当于加强版的字符串，用反引号 `,除了作为普通字符串，还可以用来定义多行字符串，
还可以在字符串中加入变量和表达式。
基本用法
普通字符串
 */

let string1 = `Hello'\n'world`;
console.log(string1);

// 多行字符串
let string3 = `Hey,
can you stop \n angry now?`;
console.log(string3);

// 字符串插入变量和表达式。
// 变量名写在 ${} 中，${} 中可以放入 JavaScript 表达式。
let name = "Mike";
let age = 27;
let info = `My Name is ${name},I am ${age + 1} years old next year`;
console.log(info);

// 字符串中调用函数
function f() {
    return "have fun!";
}
let string4 = `Game start,${f()}`
console.log(string4);











