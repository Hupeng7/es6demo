"use strict";

// 第七章 正则表达式编程
// 什么叫知识，能指导我们实践的东西才叫知识。

// 学习一样东西，如果不能使用，最多只能算作纸上谈兵。正则表达式的学习，也不例外。

// 掌握了正则表达式的语法后，下一步，也是关键的一步，就是在真实世界中使用它。

// 那么如何使用正则表达式呢？有哪些关键的点呢？本章就解决这个问题。

// 内容包括：

// 正则表达式的四种操作
// 相关API注意要点
// 真实案例
// 1. 正则表达式的四种操作
// 正则表达式是匹配模式，不管如何使用正则表达式，万变不离其宗，都需要先“匹配”。

// 有了匹配这一基本操作后，才有其他的操作：验证、切分、提取、替换。

// 进行任何相关操作，也需要宿主引擎相关API的配合使用。当然，在JS中，相关API也不多。

// 1.1 验证

// 验证是正则表达式最直接的应用，比如表单验证。

// 在说验证之前，先要说清楚匹配是什么概念。

// 所谓匹配，就是看目标字符串里是否有满足匹配的子串。因此，“匹配”的本质就是“查找”。

// 有没有匹配，是不是匹配上，判断是否的操作，即称为“验证”。

// 这里举一个例子，来看看如何使用相关API进行验证操作的。

// 比如，判断一个字符串中是否有数字。

// 使用search
var regex1 = /\d/;
var string1 = "abc123";
console.log(!!~string1.search(regex1));  // true

// 使用test
console.log(regex1.test(string1)); // true

// 使用match
console.log(!!string1.match(regex1)); // true

// 使用exec
console.log(!!regex1.exec(string1));  // true
// 其中最常用的是 test

// 1.2 切分
// 匹配上了，我们就可以进行一些操作，比如切分。
// 所谓“切分”，就是把目标字符串，切成一段一段的。在JS中使用的是split。
// 比如，目标字符串是”html,css,javascript”，按逗号来切分：
var regex2 = /,/;
var string2 = "html,css,javascript";
console.log(string2.split(regex2)); // [ 'html', 'css', 'javascript' ]

// 又比如，如下的日期格式：
// 2017/06/26
// 2017.06.26
// 2017-06-26
// 可以使用split“切出”年月日：
var regex3 = /\D/;
console.log("2017/06/26".split(regex3)); // [ '2017', '06', '26' ]
console.log("2017.06.26".split(regex3)); // [ '2017', '06', '26' ]
console.log("2017-06-26".split(regex3)); // [ '2017', '06', '26' ]

// 1.3 提取

// 虽然整体匹配上了，但有时需要提取部分匹配的数据。
// 此时正则通常要使用分组引用（分组捕获）功能，还需要配合使用相关API。
// 这里，还是以日期为例，提取出年月日。注意下面正则中的括号：
// match
var regex4 = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string4 = "2017-06-26";
console.log(string4.match(regex4));

// exec
var regex5 = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string5 = "2017-06-26";
console.log(regex5.exec(string5)); // 

// test
console.log(regex5.test(string5)); // 

// search
console.log(string5.search(regex5));

// replace
var regex6 = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string6 = "2017-06-26";
var date = [];
string6.replace(regex6, function (match, year, month, day) {
    date.push(year, month, day);
});
console.log(date); // [ '2017', '06', '26' ]

// 其中，最常用的是match。

// 1.4 替换

// 找，往往不是目的，通常下一步是为了替换。在JS中，使用replace进行替换。

// 比如把日期格式，从yyyy-mm-dd替换成yyyy/mm/dd：
var string7 = "2017-06-26";
var today = new Date(string7.replace(/-/g, "/"));
console.log(today); // 2017-06-25T16:00:00.000Z

// 这里只是简单地应用了一下replace。但，replace方法是强大的，是需要重点掌握的。

// 2. 相关API注意要点
// 从上面可以看出用于正则操作的方法，共有6个，字符串实例4个，正则实例2个：

// String#search

// String#split

// String#match

// String#replace

// RegExp#test

// RegExp#exec

// 本文不打算详细地讲解它们的方方面面细节，具体可以参考《JavaScript权威指南》的第三部分。本文重点列出一些容易忽视的地方，以飨读者。

// 2.1 search和match的参数问题

// 我们知道字符串实例的那4个方法参数都支持正则和字符串。

// 但search和match，会把字符串转换为正则的。

var string8 = "2017.06.27";
console.log(string8.search(".")); // 0

// 需要修改成下列形式之一
console.log(string8.search("\\.")); // 4
console.log(string8.search(/\./));  // 4

console.log(string8.match("."));

//需改成下列形式之一
console.log(string8.match("\\."));
console.log(string8.match(/\./));

console.log(string8.split("."));  // [ '2017', '06', '27' ]

console.log(string8.replace(".", "/")); // 2017/06.27

// 2.2 match返回结果的格式问题
// match返回结果的格式，与正则对象是否有修饰符g有关。

var string9 = "2017/06.27";
var regex9_1 = /\b(\d+)\b/;
var regex9_2 = /\b(\d+)\b/g;
console.log(string9.match(regex9_1));
console.log(string9.match(regex9_2));

// 没有g，返回的是标准匹配格式，即，数组的第一个元素是整体匹配的内容，接下来是分组捕获的内容，然后是整体匹配的第一个下标，最后是输入的目标字符串。

// 有g，返回的是所有匹配的内容。

// 当没有匹配时，不管有无g，都返回null。

// 2.3 exec比match更强大

// 当正则没有g时，使用match返回的信息比较多。但是有g后，就没有关键的信息index了。

// 而exec方法就能解决这个问题，它能接着上一次匹配后继续匹配：
var string10 = "2017.06.27";
var regex10 = /\b(\d+)\b/g;
console.log(regex10.exec(string10));
console.log(regex10.lastIndex);
console.log(regex10.exec(string10));
console.log(regex10.lastIndex);
console.log(regex10.exec(string10));
console.log(regex10.lastIndex);
console.log(regex10.exec(string10));
console.log(regex10.lastIndex);

// 其中正则实例lastIndex属性，表示下一次匹配开始的位置。

// 比如第一次匹配了“2017”，开始下标是0，共4个字符，因此这次匹配结束的位置是3，下一次开始匹配的位置是4。

// 从上述代码看出，在使用exec时，经常需要配合使用while循环：
var string11 = "2017.06.27";
var regex11 = /\b(\d+)\b/g;
var result11;
while (result11 = regex11.exec(string11)) {
    console.log(result11, regex11.lastIndex);
}

// 2.4 修饰符g，对exex和test的影响

// 上面提到了正则实例的lastIndex属性，表示尝试匹配时，从字符串的lastIndex位开始去匹配。

// 字符串的四个方法，每次匹配时，都是从0开始的，即lastIndex属性始终不变。

// 而正则实例的两个方法exec、test，当正则是全局匹配时，每一次匹配完成后，都会修改lastIndex。
// 下面让我们以test为例，看看你是否会迷糊：
var regex12 = /a/g;
console.log(regex12.test("a"), regex12.lastIndex);
console.log(regex12.test("aba"), regex12.lastIndex);
console.log(regex12.test("ababc"), regex12.lastIndex);

// 注意上面代码中的第三次调用test，因为这一次尝试匹配，开始从下标lastIndex即3位置处开始查找，自然就找不到了。

// 如果没有g，自然都是从字符串第0个字符处开始尝试匹配：
var regex13 = /a/;
console.log(regex13.test("a"), regex13.lastIndex);
console.log(regex13.test("aba"), regex13.lastIndex);
console.log(regex13.test("ababc"), regex13.lastIndex);

// 2.5 test整体匹配时需要使用^和$

// 这个相对容易理解，因为test是看目标字符串中是否有子串匹配正则，即有部分匹配即可。

// 如果，要整体匹配，正则前后需要添加开头和结尾：
