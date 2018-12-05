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










