"use strict";
var _ = require('lodash');

//_.castArray(value)
var castArray1 = _.castArray(1);
console.log('castArray1--->', castArray1);
//castArray1---> [ 1 ]
var castArray2 = _.castArray({ 'a': 1 });
console.log('castArray2--->', castArray2);
//castArray2---> [ { a: 1 } ]
var castArray3 = _.castArray('abc');
console.log('castArray3--->', castArray3);
//castArray3---> [ 'abc' ]
var castArray4 = _.castArray(null);
console.log('castArray4--->', castArray4);
//castArray4---> [ null ]
var castArray5 = _.castArray(undefined);
console.log('castArray5--->', castArray5);
//castArray5---> [ undefined ]
var castArray6 = _.castArray();
console.log('castArray6--->', castArray6);
//castArray6---> []
var castArrayArr = [1, 2, 3];
console.log(_.castArray(castArrayArr) === castArrayArr);
//true

//_.clone(value)
var cloneObjects = [{ 'a': 1 }, { 'b': 2 }];
var shallow = _.clone(cloneObjects);
console.log(shallow[0] === cloneObjects[0]);
//true

//_.cloneDeep(value)
// var cloneDeepObjects = [{ 'a': 1 }, { 'b': 2 }];
// var deep = _.cloneDeep(cloneDeepObjects);
// console.log(deep[0] === cloneDeepObjects[0]);
// //false

// //_.cloneDeepWith(value,[customizer])
// function customizer(value){
//     if(_.isElement(value)){
//         return value.cloneNode(true);
//     }
// }
// var el = _.cloneDeepWith(document.body,customizer);
// console.log(el === document.body);
// //
// console.log(el.nodeName);
// //
// console.log(el.childNodes.length);
// //

//_.cloneWith(value,[customizer])
// function customizer(value) {
//   if (_.isElement(value)) {
//     return value.cloneNode(false);
//   }
// }

// var el = _.cloneWith(document.body, customizer);

// console.log(el === document.body);
// // => false
// console.log(el.nodeName);
// // => 'BODY'
// console.log(el.childNodes.length);
// // => 0

//_.conformTo(object,source)
var conformToObject = { 'a': 1, 'b': 2 };
var conformTo1 = _.conformsTo(conformToObject, { 'b': function (n) { return n > 1; } });
console.log('conformTo1--->', conformTo1);
//conformTo1---> true
var conformTo2 = _.conformsTo(conformToObject, { 'b': function (n) { return n > 2; } });
console.log('conformTo2--->', conformTo2);
//conformTo2---> false

//_.eq(value,other)
var eq1 = { 'a': 1 };
var eq2 = { 'a': 1 };

var eq3 = _.eq(eq1, eq1);
console.log('eq3--->', eq3);
//eq3---> true
var eq4 = _.eq(eq1, eq2);
console.log('eq4--->', eq4);
//eq4---> false
var eq5 = _.eq('a', 'a');
console.log('eq5--->', eq5);
//eq5---> true
var eq6 = _.eq('a', Object('a'));
console.log('eq6--->', eq6);
//eq6---> false
var eq7 = _.eq(NaN, NaN);
console.log('eq7--->', eq7);
//eq7---> true

//_.gt(value,other)
var gt1 = _.gt(3, 1);
console.log('gt1--->', gt1);
//gt1---> true
var gt2 = _.gt(3, 3);
console.log('gt2--->', gt2);
//gt2---> false
var gt3 = _.gt(1, 3);
console.log('gt3--->', gt3);
//gt3---> false

//_.gte(value,other)
var gte1 = _.gte(3, 1);
console.log('gte1--->', gte1);
//gte1---> true
var gte2 = _.gte(3, 3);
console.log('gte2--->', gte2);
//gte2---> true
var gte3 = _.gte(1, 3);
console.log('gte3--->', gte3);
//gte3---> false

//_.isArguments(value)
var isArguments1 = _.isArguments(function () { return arguments; }());
console.log('isArguments1--->', isArguments1);
//isArguments1---> true
var isArguments2 = _.isArguments([1, 2, 3]);
console.log('isArguments2--->', isArguments2);
//isArguments2---> false

//_.isArray(value)
var isArray1 = _.isArray([1, 2, 3]);
console.log('isArray1--->', isArray1);
//isArray1---> true
var isArray2 = _.isArray('abc');
console.log('isArray2--->', isArray2);
//isArray2---> false

//_.isBoolean(value)
var isBoolean1 = _.isBoolean(false);
console.log('isBoolean1--->', isBoolean1);
//isBoolean1---> true
var isBoolean2 = _.isBoolean(null);
console.log('isBoolean2--->', isBoolean2);
//isBoolean2---> false

//_.isBuffer(value)
var isBuffer1 = _.isBuffer(new Buffer(2));
console.log('isBuffer1--->', isBuffer1);
//isBuffer1---> true
var isBuffer2 = _.isBuffer(new Uint8Array(2));
console.log('isBuffer2--->', isBuffer2);
//isBuffer2---> false

//_.isDate(value)
var isDate1 = _.isDate(new Date);
console.log('isDate1--->', isDate1);
//isDate1---> true
var isDate2 = _.isDate('Mon April 23 2012');
console.log('isDate2--->', isDate2);
//isDate2---> false

//_.isElement(value)
// _.isElement(document.body);
// // => true
// _.isElement('<body>');
// // => false

//_.isEmpty(value)
var isEmpty1 = _.isEmpty(null);
console.log('isEmpty1--->', isEmpty1);
//isEmpty1---> true

var isEmpty2 = _.isEmpty(true);
console.log('isEmpty2--->', isEmpty2);
//isEmpty2---> true
var isEmpty3 = _.isEmpty(1);
console.log('isEmpty3--->', isEmpty3);
//isEmpty3---> true
var isEmpty4 = _.isEmpty([1, 2, 3]);
console.log('isEmpty4--->', isEmpty4);
//isEmpty4---> false
var isEmpty5 = _.isEmpty({ 'a': 1 });
console.log('isEmpty5--->', isEmpty5);
//isEmpty5---> false

//_.isEqual(value,other)
var isEqual1 = { 'a': 1 };
var isEqual2 = { 'a': 1 };
var isEqual3 = _.isEqual(isEqual1, isEqual2);
console.log('isEqual3--->', isEqual3);
//isEqual3---> true
console.log('isEqual4--->', (isEqual1 === isEqual2));
//isEqual4---> false

//_.isEqualWith(value,other,[customizer])
function isGreeting(value) {
    return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
    if (isGreeting(objValue) && isGreeting(othValue)) {
        return true;
    }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];
var isEqualWith1 = _.isEqualWith(array, other, customizer);
console.log('isEqualWith1--->', isEqualWith1);
//isEqualWith1---> true

//_.isError(value)
var isError1 = _.isError(new Error);
console.log('isError1--->', isError1);
//isError1---> true
var isError2 = _.isError(Error);
console.log('isError2--->', isError2);
//isError2---> false

//_.isFinite(value)
var isFinite1 = _.isFinite(3);
console.log('isFinite1--->', isFinite1);
//isFinite1---> true
var isFinite2 = _.isFinite(Number.MIN_VALUE);
console.log('isFinite2--->', isFinite2);
//isFinite2---> true
var isFinite3 = _.isFinite(Infinity);
console.log('isFinite3--->', isFinite3);
//isFinite3---> false
var isFinite4 = _.isFinite('3');
console.log('isFinite4--->', isFinite4);
//isFinite4---> false

//_.isFunction(value)
var isFunction1 = _.isFunction(_);
console.log('isFunction1--->', isFunction1);
//isFunction1---> true
var isFunction2 = _.isFunction(/abc/);
console.log('isFunction2--->', isFunction2);
//isFunction2---> false

//_.isInteger(value)
var isInteger1 = _.isInteger(3);
console.log('isInteger1--->', isInteger1);
//isInteger1---> true
var isInteger2 = _.isInteger(Number.MIN_VALUE);
console.log('isInteger2--->', isInteger2);
//isInteger2---> false
var isInteger3 = _.isInteger(Infinity);
console.log('isInteger3--->', isInteger3);
//isInteger3---> false
var isInteger4 = _.isInteger('3');
console.log('isInteger4--->', isInteger4);
//isInteger4---> false

//_.isLength(value)
var isLength1 = _.isLength(3);
console.log('isLength1--->', isLength1);
//isLength1---> true
var isLength2 = _.isLength(Number.MIN_VALUE);
console.log('isLength2--->', isLength2);
//isLength2---> false
var isLength3 = _.isLength(Infinity);
console.log('isLength3--->', isLength3);
//isLength3---> false
var isLength4 = _.isLength('3');
console.log('isLength4--->', isLength4);
//isLength4---> false

//_.isMap(value)
var isMap1 = _.isMap(new Map);
console.log('isMap1--->', isMap1);
//isMap1---> true
var isMap2 = _.isMap(new WeakMap);
console.log('isMap2--->', isMap2);
//isMap2---> false

//_.isMatch(object,source)
// Arguments
// object (Object): The object to inspect.
// source (Object): The object of property values to match.
var isMatchObj = { 'a': 1, 'b': 2 };
var isMatch1 = _.isMatch(isMatchObj, { 'b': 2 });
console.log('isMatch1--->', isMatch1);
//isMatch1---> true
var isMatch2 = _.isMatch(isMatchObj, { 'b': 1 });
console.log('isMatch2--->', isMatch2);
//isMatch2---> false

//_.isMatchWith(object,source,[customizer])
function isGreeting1(value) {
    return /^h(?:i|ello)$/.test(value);
}

function customizer1(objValue, srcValue) {
    if (isGreeting1(objValue) && isGreeting1(srcValue)) {
        return true;
    }
}
var object1 = { 'greeting': 'hello' };
var source1 = { 'greeting': 'hi' };
var isMatchWith1 = _.isMatchWith(object1, source1, customizer1);
console.log('isMatchWith1--->', isMatchWith1);
//isMatchWith1---> true

//_.isNaN(value)
var isNaN1 = _.isNaN(NaN);
console.log('isNaN1--->', isNaN1);
//isNaN1---> true
var isNaN2 = _.isNaN(new Number(NaN));
console.log('isNaN2--->', isNaN2);
//isNaN2---> true
var isNaN3 = isNaN(undefined);
console.log('isNaN3--->', isNaN3);
//isNaN3---> true
var isNaN4 = _.isNaN(undefined);
console.log('isNaN4--->', isNaN4);
//isNaN4---> false

//_.isNative(value)
var isNative1 = _.isNative(Array.prototype.push);
console.log('isNative1--->', isNative1);
//isNative1---> true
var isNative2 = _.isNative(_);
console.log('isNative2--->', isNative2);
//isNative2---> false

//_.isNil(value)
var isNil1 = _.isNil(null);
console.log('isNil1--->', isNil1);
//isNil1---> true
var isNil2 = _.isNil(void 0);
console.log('isNil2--->', isNil2);
//isNil2---> true
var isNil3 = _.isNil(NaN);
console.log('isNil3--->', isNil3);
//isNil3---> false

//_.isNull(value)
var isNull1 = _.isNull(null);
console.log('isNull1--->', isNull1);
//isNull1---> true
var isNull2 = _.isNull(void 0);
console.log('isNull2--->', isNull2);
//isNull2---> false

//_.isNumber(value)
var isNumber1 = _.isNumber(3);
console.log('isNumber1--->', isNumber1);
//isNumber1---> true
var isNumber2 = _.isNumber(Number.MIN_VALUE);
console.log('isNumber2--->', isNumber2);
//isNumber2---> true
var isNumber3 = _.isNumber(Infinity);
console.log('isNumber3--->', isNumber3);
//isNumber3---> true
var isNumber4 = _.isNumber('3');
console.log('isNumber4--->', isNumber4);
//isNumber4---> false

//_.isObject(value)
var isObject1 = _.isObject({});
console.log('isObject1--->', isObject1);
//isObject1---> true
var isObject2 = _.isObject([1, 2, 3]);
console.log('isObject2--->', isObject2);
//isObject2---> true
var isObject3 = _.isObject(_.noop);
console.log('isObject3--->', isObject3);
//isObject3---> true
var isObject4 = _.isObject(null);
console.log('isObject4--->', isObject4);
//isObject4---> false

//_.isObjectLike(value)
var isObjectLike1 = _.isObjectLike({});
console.log('isObjectLike1--->',isObjectLike1);
//isObjectLike1---> true
var isObjectLike2 = _.isObjectLike([1,2,3]);
console.log('isObjectLike1--->',isObjectLike2);
//isObjectLike1---> true
var isObjectLike3 = _.isObjectLike(_.noop);
console.log('isObjectLike3--->',isObjectLike3);
//isObjectLike3---> false
var isObjectLike4 = _.isObjectLike(null);
console.log('isObjectLike4--->',isObjectLike4);
//isObjectLike4---> false

















