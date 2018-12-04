"use strict";

/*
parseFloat()
parseFloat方法用于将一个字符串转为浮点数。
 */
console.log('parseInt方法用于将字符串转为整数。');
console.log(parseInt('123'));

console.log('如果字符串头部有空格，空格会被自动去除。');
console.log(parseInt('   81'));

console.log('如果parseInt的参数不是字符串，则会先转为字符串再转换。');
console.log(parseInt(1.23));
// 等同于
console.log(parseInt('1.23'));

console.log('字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，' +
    '就不再进行下去，返回已经转好的部分。');
console.log(parseInt('8a')); //8
console.log(parseInt('12***')); // 12
console.log(parseInt('12.34')); // 12
console.log(parseInt('15e2')); // 15
console.log(parseInt('15px')); //15
console.log('上面代码中，parseInt的参数都是字符串，结果只返回字符串头部可以转为数字的部分。');

console.log('如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。');
console.log(parseInt('abc')); //NaN
console.log(parseInt('.3')); // NaN
console.log(parseInt('')); // NaN
console.log(parseInt('+')); // NaN
console.log(parseInt('+1')); // 1

console.log('如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。' +
    '如果字符串以0x或0X开头，parseInt会将其按照十六进制数解析。');
console.log(parseInt('0x10'));
console.log('如果字符串以0开头，将其按照10进制解析。');
console.log(parseInt('011'));

console.log('对于那些会自动转为科学计数法的数字，parseInt会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。');
console.log(parseInt(100000000000000000000000.5)); //1
//等同于
console.log(parseInt('1e+21')); //1
console.log(parseInt(0.0000008)); //8
//等同于
console.log(parseInt('8e-7')); // 8

console.log('进制转换\n' +
    '\n' +
    'parseInt方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。默认情况下，' +
    'parseInt的第二个参数为10，即默认是十进制转十进制。');

console.log(parseInt('1000')); // 1000
// 等同于下面写法   推荐下面的
console.log(parseInt('1000', 10)); // 1000

console.log('下面是转换指定进制的数的例子。');
console.log(parseInt('1000', 2));
console.log(parseInt('1000', 6));
console.log(parseInt('1000', 8));

console.log('上面代码中，二进制、六进制、八进制的1000，分别等于十进制的8、216和512。这意味着，可以用parseInt方法进行进制的转换。\n' +
    '\n' +
    '如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。' +
    '如果第二个参数是0、undefined和null，则直接忽略。');
console.log(parseInt('10', 37)); // NaN
console.log(parseInt('10', 1)); // NaN
console.log(parseInt('10', 0)); //10
console.log(parseInt('10', null)); // 10
console.log(parseInt('10', undefined)); // 10

console.log('如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回NaN。');
console.log(parseInt('1546', 2)); // 1
console.log(parseInt('546', 2)); // NaN

console.log(parseInt(0x11, 36)); //43
console.log(parseInt(0x11, 2)); //1
//等同于
console.log(parseInt(String(0x11), 36));
console.log(parseInt(String(0x11), 2));
// 等同于
console.log(parseInt('17', 36));
console.log(parseInt('17', 2));

console.log('这种处理方式，对于八进制的前缀0，尤其需要注意。');
//console.log(parseInt(011, 2));   // NaN
// ==
//console.log(parseInt(String(011), 2));
// ==
console.log(parseInt(String(9), 2));

/*
parseFloat()
parseFloat方法用于将一个字符串转为浮点数。
 */
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));

console.log(parseFloat('3.14more non-digit characters')); // 3.14

console.log(parseFloat('\t\v\r12.34\n')); // 12.34

console.log(parseFloat([])); // NaN
console.log(parseFloat('FF2')); // NaN
console.log(parseFloat('')); // NaN

console.log('上面代码中，尤其值得注意，parseFloat会将空字符串转为NaN。\n' +
    '\n' +
    '这些特点使得parseFloat的转换结果不同于Number函数。');
console.log(parseFloat(true)); // NaN
console.log(Number(true)); // 1

console.log(parseFloat(null)); // NaN
console.log(Number(null)); // 0

console.log(parseFloat('')); // NaN
console.log(Number('')); // 0

console.log(parseFloat('123.45#'));  // 123.45
console.log(Number('123.45#')); // NaN

/*
isNaN()
isNaN方法可以用来判断一个值是否为NaN。
 */
console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false

/*
但是，isNaN只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成NaN，
所以最后返回true，这一点要特别引起注意。也就是说，isNaN为true的值，有可能不是NaN，而是一个字符串。
 */
console.log(isNaN('Hello')); //true
// ==
console.log(isNaN(Number('Hello'))); // true

// 出于同样的原因，对于对象和数组，isNaN也返回true。
console.log(isNaN({})); //true
// ==
console.log(isNaN(Number({}))); //true

console.log(isNaN(['xyz'])); // true
// ==
console.log(isNaN(Number(['xyz']))); // true

//但是，对于空数组和只有一个数值成员的数组，isNaN返回false。
console.log(isNaN([])); // false
console.log(isNaN([123])); // false
console.log(isNaN(['123'])); //false
//上面代码之所以返回false，原因是这些数组能被Number函数转成数值

console.log('isNaN method--->');

//因此，使用isNaN之前，最好判断一下数据类型。
function myIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
}

console.log(myIsNaN(1));

//判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。
function myIsNaNMoreSafe(value) {
    return value !== value;
}

console.log(myIsNaNMoreSafe(['123']));
console.log(myIsNaNMoreSafe(['xyz']));

/*
isFinite()
isFinite方法返回一个布尔值，表示某个值是否为正常的数值。
除了Infinity、-Infinity、NaN和undefined这几个值会返回false，isFinite对于其他的数值都会返回true。
 */
console.log(isFinite(Infinity)); //false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(undefined));  // false
console.log(isFinite(null));
console.log(isFinite(-1));




