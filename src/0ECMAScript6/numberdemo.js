"use strict";

//数值
/*
整数和浮点数
JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。

1 === 1.0 // true
 */

console.log(0.1 + 0.2 === 0.3);
//false

console.log(0.3 / 0.1);
// 2.9999999999999996

console.log((0.3 - 0.2) === (0.2 - 0.1)); // false

/*
 数值精度
 */

console.log(Math.pow(2, 53));

console.log(Math.pow(2, 53) + 1);

console.log(Math.pow(2, 53) + 2);

console.log(Math.pow(2, 53) + 3);

console.log(Math.pow(2, 53) + 4);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/*
正零和负零
前面说过，JavaScript 的64位浮点数之中，有一个二进制位是符号位。这意味着，任何一个数都有一个对应的负值，就连0也不例外。

JavaScript 内部实际上存在2个0：一个是+0，一个是-0，区别就是64位浮点数表示法的符号位不同。它们是等价的。

-0 === +0 // true
0 === -0 // true
0 === +0 // true
几乎所有场合，正零和负零都会被当作正常的0。

+0 // 0
-0 // 0
(-0).toString() // '0'
(+0).toString() // '0'
唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的。

(1 / +0) === (1 / -0) // false
上面的代码之所以出现这样结果，是因为除以正零得到+Infinity，除以负零得到-Infinity，
这两者是不相等的（关于Infinity详见下文）。
 */

/*
NaN Not a Number
 */
console.log(5 - 'x');

console.log(Math.acos(2));
console.log(Math.log(-1));
console.log(Math.sqrt(-1));

console.log(0 / 0);

console.log(typeof NaN); // 'number'

/*
2）运算规则
NaN不等于任何值，包括它本身。
 */
console.log(NaN === NaN); //false
console.log([NaN].indexOf(NaN)); // -1

//NaN在布尔运算时被当作false。
console.log(Boolean(NaN)); // false

//NaN与任何数（包括它自己）的运算，得到的都是NaN。
console.log(NaN + 32); // NaN
console.log(NaN - 32); // NaN
console.log(NaN * 32); // NaN
console.log(NaN / 32); // NaN

/*
Infinity
（1）含义

Infinity表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，
无法表示；另一种是非0数值除以0，得到Infinity。
 */
//场景一
console.log(Math.pow(2, 1024));
//Infinity

//场景二
console.log(0 / 0); // NaN
console.log(1 / 0); // Infinity

/*
上面代码中，第一个场景是一个表达式的计算结果太大，超出了能够表示的范围，因此返回Infinity。第二个场景是0除以0会得到NaN，而非0数值除以0，会返回Infinity。

Infinity有正负之分，Infinity表示正的无穷，-Infinity表示负的无穷。

Infinity === -Infinity // false

1 / -0 // -Infinity
-1 / -0 // Infinity
上面代码中，非零正数除以-0，会得到-Infinity，负数除以-0，会得到Infinity。

由于数值正向溢出（overflow）、负向溢出（underflow）和被0除，JavaScript 都不报错，所以单纯的数学运算几乎没有可能抛出错误。

Infinity大于一切数值（除了NaN），-Infinity小于一切数值（除了NaN）。
 */

console.log(Infinity > 1000); //true
console.log(-Infinity < -1000); //true

// Infinity 与 NaN比较 总是返回false
console.log(Infinity > NaN);
console.log(Infinity < NaN);
console.log(-Infinity > NaN);
console.log(-Infinity < NaN);

/*
2）运算规则
Infinity的四则运算，符合无穷的数学计算规则。
 */
console.log(5 * Infinity); // Infinity
console.log(5 - Infinity); // Infinity
console.log(Infinity / 5); // Infinity
console.log(5 / Infinity); //0

/*
0乘以Infinity，返回NaN；0除以Infinity，返回0；Infinity除以0，返回Infinity。
 */
console.log(0 * Infinity); // NaN
console.log(0 / Infinity); // 0
console.log(Infinity / 0); // Infinity

// Infinity 加上或乘以 Infinity ,返回值还是Infinity
console.log(Infinity + Infinity); // Infinity
console.log(Infinity * Infinity); // Infinity

// Infinity 减去或➗ Infinity ,得到 NaN
console.log(Infinity - Infinity); // NaN
console.log(Infinity / Infinity); // NaN

console.log('Infinity与 null计算时 null会转成0，等同于0 的计算');
console.log(null * Infinity); // NaN
console.log(null / Infinity); // 0
console.log(Infinity / null); // Infinity

console.log('Infinity与undefined计算，返回的都是NaN。');
console.log(undefined + Infinity); // NaN
console.log(undefined - Infinity);// NaN
console.log(undefined * Infinity);// NaN
console.log(undefined / Infinity);// NaN
console.log(Infinity / undefined);// NaN

/*
与数值相关的全局方法
parseInt()
（1）基本用法
parseInt方法用于将字符串转为整数。
 */
console.log(parseInt('123')); // 123

// 如果字符串头部有空格，空格会被自动去除。
console.log(parseInt('   81')); // 81

// 如果parseInt的参数不是字符串，则会先转为字符串再转换。
console.log(parseInt(1.23)); // 1
console.log(parseInt('1.23')); // 1

/*
字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，
就不再进行下去，返回已经转好的部分。
 */
console.log(parseInt('8a')); // 8
console.log(parseInt('12**')); // 12
console.log(parseInt('12.34')); // 12
console.log(parseInt('15e2')); // 15
console.log(parseInt('15px')); // 15

/*
上面代码中，parseInt的参数都是字符串，结果只返回字符串头部可以转为数字的部分。
如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。
 */
console.log(parseInt('abc')); // NaN
console.log(parseInt('.3')); // NaN
console.log(parseInt('')); // NaN
console.log(parseInt('+')); // NaN
console.log(parseInt('+1')); // 1



















