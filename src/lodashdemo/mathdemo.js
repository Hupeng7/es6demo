"use strict";
var _ = require('lodash');

//_.add(augend,added)
let add1 = _.add(6, 4);
console.log('add1--->', add1);
//add1---> 10

//_.ceil(number,[precision=0])
let ceil1 = _.ceil(4.006);
console.log('ceil1--->', ceil1);
//ceil1---> 5
let ceil2 = _.ceil(6.004, 2);
console.log('ceil2--->', ceil2);
//ceil2---> 6.01
let ceil3 = _.ceil(6040, -2);
console.log('ceil3--->', ceil3);
//ceil3---> 6100

//_.divide(dividend,divisor)
let divide1 = _.divide(6, 4);
console.log('divide1--->', divide1);
//divide1---> 1.5

//_floor(number,[precision=0])
let floor1 = _.floor(4.006);
console.log('floor1--->', floor1);
//floor1---> 4

//_.max(array)
let max1 = _.max([4, 2, 8, 6]);
console.log('max1--->', max1);
//max1---> 8
let max2 = _.max([]);
console.log('max2--->', max2);
//max2---> undefined

//_.maxBy(array,[iteratee=_.identity])
var maxByObject = [{ 'n': 1 }, { 'n': 2 }];
let maxBy1 = _.maxBy(maxByObject, function (o) { return o.n });
console.log('maxBy1--->', maxBy1);
//maxBy1---> { n: 2 }
let maxBy2 = _.maxBy(maxByObject, 'n');
console.log('maxBy2--->', maxBy2);
//maxBy2---> { n: 2 }

//_.mean(array)  平均值
let mean1 = _.mean([4, 2, 8, 6]);
console.log('mean1--->', mean1);
//mean1---> 5

//_.meanBy(array,[iteratee=_.identity])
var meanByObject = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
let meanBy1 = _.meanBy(meanByObject, function (o) { return o.n });
console.log('meanBy1--->', meanBy1);
//meanBy1---> 5
let meanBy2 = _.meanBy(meanByObject, 'n');
console.log('meanBy2--->', meanBy2);
//meanBy2---> 5

//_.min(array)
let min1 = _.min([4, 2, 8, 6]);
console.log('min1--->', min1);
//min1---> 2
let min2 = _.min([]);
console.log('min2--->', min2);
//min2---> undefined

//_.minBy(array,[iteratee=_.identity])
var minByObject = [{ 'n': 1 }, { 'n': 2 }];
let minBy1 = _.minBy(minByObject, function (o) { return o.n; });
console.log('minBy1--->', minBy1);
//minBy1---> { n: 1 }
let minBy2 = _.minBy(minByObject, 'n');
console.log('minBy2--->', minBy2);
//minBy2---> { n: 1 }

//_.multiply(multiplier,multiplicand)
let multiply1 = _.multiply(6, 4);
console.log('multiply1--->', multiply1);
//multiply1---> 24

//_.round(number,[precision=0])
let round1 = _.round(4.006);
console.log('round1--->', round1);
//round1---> 4
let round2 = _.round(4.006, 2);
console.log('round2--->', round2);
//round2---> 4.01
let round3 = _.round(4060, -2);
console.log('round3--->', round3);
//round3---> 4100

//_.subtract(minuend,subtrahend)
let subtract1 = _.subtract(6, 4);
console.log('subtract1--->', subtract1);
//subtract1---> 2

//._sum(array);
let sum1 = _.sum([4, 2, 8, 6]);
console.log('sum1--->', sum1);
//sum1---> 20

//_.sumBy(array,[iteratee=_.identity])
var sumByObject = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
let sumBy1 = _.sumBy(sumByObject, function (o) { return o.n; });
console.log('sumBy1--->', sumBy1);
//sumBy1---> 20
let sumBy2 = _.sumBy(sumByObject, 'n');
console.log('sumBy2--->', sumBy2);
//sumBy2---> 20














