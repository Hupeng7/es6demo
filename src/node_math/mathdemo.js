"use strict";

/**
 * Math 对象用于执行数学任务
 */

// E 返回算术常量 e，即自然对数的底数（约等于2.718）。
function compoundOneYear(interestRate, currentVal) {
    return currentVal * (Math.E ** interestRate);
}
console.log('Math.E--->', Math.E);
console.log(1 + (1 / 1000000) ** 1000000);
console.log(compoundOneYear(0.05, 100));

//LN2 返回 2 的自然对数（约等于0.693）。
function getNatLog2() {
    return Math.LN2;
}
console.log('LN2--->', getNatLog2());

//LN10 返回 10 的自然对数（约等于2.302）。
function getNatLog10() {
    return Math.LN10;
}
console.log('LN10--->', getNatLog10());

//LOG2E 返回以 2 为底的 e 的对数（约等于 1.414）。
function getLog2e() {
    return Math.LOG2E;
}
console.log('LOG2E--->', getLog2e());

//LOG10E 返回以 10 为底的 e 的对数（约等于0.434）。
function getLog10e() {
    return Math.LOG10E;
}
console.log('LOG10E--->', getLog10e());

// PI 返回圆周率（约等于3.14159）。
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}
console.log('Math PI--->', Math.PI);
console.log(calculateCircumference(10));

//Math.SQRT1_2  返回返回 2 的平方根的倒数（约等于 0.707）。
function getRoot1Over2() {
    return Math.SQRT1_2;
}
console.log('Math SQRT1_2--->', getRoot1Over2());

// Math​.SQRT2 返回 2 的平方根（约等于 1.414）。
function getRoot2() {
    return Math.SQRT2;
}
console.log('Math SQRT2--->', getRoot2());

/**
 * Methods
 */
// Math​.abs()  返回数的绝对值。
function difference(a, b) {
    return Math.abs(a - b);
}
console.log(difference(3, 5));
console.log(difference(5, 3));
console.log(difference(1.23456, 7.89012));

//Math.acos()  返回数的反余弦值。
function calcAngle(adjacent, hypotenuse) {
    return Math.acos(adjacent / hypotenuse);
}
console.log(calcAngle(8, 10));
console.log(calcAngle(5, 3));

// Math.acosh()  返回一个数字的双曲弧余弦
console.log(Math.acosh(0.99999999999));
console.log(Math.acosh(1));
console.log(Math.acosh(2));
console.log(Math.acosh(2.5));

//Math.asin()  返回数的反正弦值。
function calcAngle(opposite, hypotenuse) {
    return Math.asin(opposite / hypotenuse);
}
console.log(calcAngle(6, 10));
console.log(calcAngle(5, 3));

// Math.asinh()  返回一个数字的双曲反正弦
console.log(Math.asinh(1));
console.log(Math.asinh(0));
console.log(Math.asinh(-1));
console.log(Math.asinh(2));

//Math.atan()   以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
function calcAngle(opposite, adjacent) {
    return Math.atan(opposite / adjacent);
}
console.log(calcAngle(8, 10));
console.log(calcAngle(5, 3));

// Math.atan2() 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
function calcAngleDegrees(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
}
console.log(calcAngleDegrees(5, 5));
console.log(calcAngleDegrees(10, 10));
console.log(calcAngleDegrees(0, 10));

//Math.atanh()  返回一个数字的双曲线反正切，
console.log(Math.atanh(-1));
console.log(Math.atanh(0));
console.log(Math.atanh(0.5));
console.log(Math.atanh(1));

//Math.cbrt() 返回数字的立方根
console.log(Math.cbrt(-1));
console.log(Math.cbrt(1));
console.log(Math.cbrt(Infinity));
console.log(Math.cbrt(64));

//Math.ceil()  对数进行上舍入。
console.log(Math.ceil(.95));
console.log(Math.ceil(4));
console.log(Math.ceil(7.004));
console.log(Math.ceil(-7.004));

//Math.clz32()  返回数字的32位二进制表示中的前导零位数
console.log(Math.clz32(1));
console.log(Math.clz32(4));
console.log(Math.clz32(1000));

// Math.cos()  返回数的余弦。
function getCircleX(radians, radius) {
    return Math.cos(radians) * radius;
}
console.log(getCircleX(1, 10));
console.log(getCircleX(2, 10));
console.log(getCircleX(Math.PI, 10));

// Math.cosh()  返回一个数字的双曲余弦值，
console.log(Math.cosh(0));
console.log(Math.cosh(1));
console.log(Math.cosh(-1));
console.log(Math.cosh(2));

// Math​.exp()   返回 e 的指数。
console.log(Math.exp(0));
console.log(Math.exp(1));
console.log(Math.exp(-1));
console.log(Math.exp(2));

//Math​.expm1()  returns ex - 1,
console.log(Math.expm1(0));
console.log(Math.expm1(1));
console.log(Math.expm1(-1));
console.log(Math.expm1(2));

// Math.Floor()   对数进行下舍入。
console.log(Math.floor(5.95));
console.log(Math.floor(5.05));
console.log(Math.floor(5));
console.log(Math.floor(-5.05));

//Math.fround()  最接近的32位单精度浮点数表示。
console.log(Math.fround(5.5));
console.log(Math.fround(5.05));
console.log(Math.fround(5));
console.log(Math.fround(-5.05));

//Math.hypot() 返回其参数的平方和的平方根
console.log(Math.hypot(3, 4));
console.log(Math.hypot(5, 12));
console.log(Math.hypot(3, 4, 5));
console.log(Math.hypot(-5));

// Math.imul()  两个参数的类似C的32位乘法的结果。
console.log(Math.imul(3, 4));
console.log(Math.imul(-5, 12));
console.log(Math.imul(0xffffffff, 5));
console.log(Math.imul(0xfffffffe, 5));

//Math.log() 返回数的自然对数（底为e）。
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}
console.log(getBaseLog(2, 8));
console.log(getBaseLog(5, 625));

//Math.log10()  返回数字的基数10对数，
console.log(Math.log10(100000));
console.log(Math.log10(2));
console.log(Math.log10(1));
console.log(Math.log10(0));

//Math.log1p()  返回1 +数字的自然对数（基数e），
console.log(Math.log1p(1));
console.log(Math.log1p(0));
console.log(Math.log1p(-1));
console.log(Math.log1p(-2));

//Math.log2()  返回一个数字的基数2对数，
console.log(Math.log2(3));
console.log(Math.log2(2));
console.log(Math.log2(1));
console.log(Math.log2(0));

//Math​.max()   返回 x 和 y 中的最高值。
console.log(Math.max(1, 3, 2));
console.log(Math.max(-1, -3, -2));
var array1 = [1, 3, 2];
console.log(Math.max(...array1));

//Math.min()  返回 x 和 y 中的最低值。
console.log(Math.min(2, 3, 1));
console.log(Math.min(-2, -3, -1));
console.log(Math.min(...array1));

//Math.pow() 将基数返回到指数幂，
console.log(Math.pow(7, 3));
console.log(Math.pow(4, 0.5));
console.log(Math.pow(7, -2));
console.log(Math.pow(-7, 0.5));

// Math.random() 	返回 0 ~ 1 之间的随机数。
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(3));
console.log(getRandomInt(1));
console.log(Math.random());

//Math.round()  把数四舍五入为最接近的整数。中间取大值
console.log(Math.round(0.9));
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));

// Math.sign() 返回数字的符号，表示该数字是正数，负数还是零。
console.log(Math.sign(3));
console.log(Math.sign(-3));
console.log(Math.sign(0));
console.log(Math.sign('-3'));

//Math.sin() 返回数的正弦。
function getCircleY(radians, radius) {
    return Math.sin(radians) * radius;
}
console.log(getCircleY(1, 10));
console.log(getCircleY(2, 10));
console.log(getCircleY(Math.PI, 10));

//Math.sinh() 返回一个数字的双曲正弦值，
console.log(Math.sinh(0));
console.log(Math.sinh(1));
console.log(Math.sinh(-1));
console.log(Math.sinh(2));

//Math.sqrt() 返回数的平方根。
function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)))
}
console.log(calcHypotenuse(3, 4));
console.log(calcHypotenuse(5, 12));
console.log(calcHypotenuse(0, 0));

//Math.tan() 返回角的正切。
function getTanFromDegrees(degrees) {
    return Math.tan(degrees * Math.PI / 180);
}
console.log(getTanFromDegrees(0));
console.log(getTanFromDegrees(45));
console.log(getTanFromDegrees(90));

//Math.tanh()  返回数字的双曲正切，
console.log(Math.tanh(-1));
console.log(Math.tanh(0));
console.log(Math.tanh(Infinity));
console.log(Math.tanh(1));

// Math.trunc() 通过删除任何小数位返回数字的整数部分。
console.log(Math.trunc(13.37));
console.log(Math.trunc(42.84));
console.log(Math.trunc(0.123));
console.log(Math.trunc(-0.123));

//
console.log(Math.valueOf());







