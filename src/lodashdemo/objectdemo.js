"use strict"
var _ = require('lodash');

//_.assign(object,[sources])
function Foo() {
    this.a = 1;
}
function Bar() {
    this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;
let assign1 = _.assign({ 'a': 0 }, new Foo, new Bar);
console.log('assign1--->', assign1);
//assign1---> { a: 1, c: 3 }

//_.assignIn(object,[sources])
let assignIn1 = _.assignIn({ 'a': 0 }, new Foo, new Bar);
console.log('assignIn1--->', assignIn1);
//assignIn1---> { a: 1, b: 2, c: 3, d: 4 }

//_.assignInWith(object,sources,[customizer])
function customizer(objValue, srcValue) {
    return _.isUndefined(objValue) ? srcValue : objValue;
}
var defaults = _.partialRight(_.assignInWith, customizer);
var assignInWith1 = defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
console.log('assignInWith1--->', assignInWith1);
//assignInWith1---> { a: 1, b: 2 }

//_.assignWith(object,sources,[customizer])
var defaults1 = _.partialRight(_.assignWith, customizer);
var assignWith1 = defaults1({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
console.log('assignWith1--->', assignWith1);
//assignWith1---> { a: 1, b: 2 }

//_.at(object,[path])
var atObject = { 'a': [{ 'b': { 'c': 3 } }, 4] };
var at1 = _.at(atObject, ['a[0].b.c', 'a[1]']);
console.log('at1--->', at1);
//at1---> [ 3, 4 ]

//_.create(prototype,[properties])
function Shape() {
    this.x = 0;
    this.y = 0;
}
function Circle() {
    Shape.call(this);
}
Circle.prototype = _.create(Shape.prototype, {
    'constructos': Circle
});
var circle = new Circle;
let a = circle instanceof Circle;
console.log('a--->', a);
//a---> true
let b = circle instanceof Shape;
console.log('b--->', b);
//b---> true

//_.defaults(object,[sources])
let defaults2 = _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
console.log('defaults2--->', defaults2);
//defaults2---> { a: 1, b: 2 }

//_.defaultsDeep(object,[sources])
let defaultsDeep1 = _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
console.log('defaultsDeep1--->', defaultsDeep1);
//defaultsDeep1---> { a: { b: 2, c: 3 } }

//_.findKey(object,[predicate=_.identity])
var users = {
    'barney': { 'age': 36, 'active': true },
    'fred': { 'age': 40, 'active': false },
    'pebbles': { 'age': 1, 'active': true }
}
let findKey1 = _.findKey(users, function (o) { return o.age < 40; });
console.log('findKey1--->', findKey1);
//findKey1---> barney
let findKey2 = _.findKey(users, { 'age': 1, 'active': true });
console.log('findKey2--->', findKey2);
//findKey2---> pebbles
let findKey3 = _.findKey(users, ['active', false]);
console.log('findKey3--->', findKey3);
//findKey3---> fred
let findKey4 = _.findKey(users, 'active');
console.log('findKey4--->', findKey4);
//findKey4---> barney

//_.findLastKey(object,[pre])
let findLastKey1 = _.findLastKey(users, function (o) { return o.age < 40 });
console.log('findLastKey1--->', findLastKey1);
//findLastKey1---> pebbles
let findLastKey2 = _.findLastKey(users, { 'age': 36, 'active': true });
console.log('findLastKey2--->', findLastKey2);
//findLastKey2---> barney
let findLastKey3 = _.findLastKey(users, ['active', false]);
console.log('findLastKey3--->', findLastKey3);
//findLastKey3---> fred
let findLastKey4 = _.findLastKey(users, 'active');
console.log('findLastKey4--->', findLastKey4);
//findLastKey4---> pebbles

//_.forIn(object,[iteratee=_.identity])
function FooForIn() {
    this.a = 1;
    this.b = 2;
}
FooForIn.prototype.c = 3;
_.forIn(new FooForIn, function (value, key) {
    console.log(key, value);
});
// a 1 b 2 c 3

// _.forInRight(object,[iteratee=_.indetity])
_.forInRight(new FooForIn, function (value, key) {
    console.log(key);
});
//c b a

// _.forOwn(object,[iteratee=_.identity])
_.forOwn(new FooForIn, function (value, key) {
    console.log(key);
});

// _.forOwnRight(object,[iteratee=_.identity])
_.forOwnRight(new FooForIn, function (value, key) {
    console.log(key);
});

// _.functions(object)
function FooFunctions() {
    this.a = _.constant('a');
    this.b = _.constant('b');
}
FooFunctions.prototype.c = _.constant('c');
let functions1 = _.functions(new FooFunctions);
console.log('functions1--->', functions1);
//functions1---> [ 'a', 'b' ]

//_.functionsIn(object)
let functionsIn1 = _.functionsIn(new FooFunctions);
console.log('functionsIn1--->', functionsIn1);
//functionsIn1---> [ 'a', 'b', 'c' ]

//_.get(object,path,[defaultValue])
var getObject = { 'a': [{ 'b': { 'c': 3 } }] };
let get1 = _.get(getObject, 'a[0].b.c');
console.log('get1--->', get1);
//get1---> 3
let get2 = _.get(getObject, ['a', '0', 'b', 'c']);
console.log('get2--->', get2);
//get2---> 3
let get3 = _.get(getObject, 'a.b.c', 'default');
console.log('get3--->', get3);
//get3---> default

//_.has(object,path)
var hasObject = { 'a': { 'b': 2 } };
var hasOther = _.create({ 'a': _.create({ 'b': 2 }) });
let has1 = _.has(hasObject, 'a');
console.log('has1--->', has1);
//has1---> true
let has2 = _.has(hasObject, 'a.b');
console.log('has2--->', has2);
//has2---> true
let has3 = _.has(hasObject, ['a', 'b']);
console.log('has3--->', has3);
//has3---> true
let has4 = _.has(hasOther, 'a');
console.log('has4--->', has4);
//has4---> false

// _.hasIn(object,path)
var hasInObject = _.create({ 'a': _.create({ 'b': 2 }) });
let hasIn1 = _.hasIn(hasInObject, 'a');
console.log('hasIn1--->', hasIn1);
//hasIn1---> true
let hasIn2 = _.hasIn(hasInObject, 'a.b');
console.log('hasIn2--->', hasIn2);
//hasIn2---> true
let hasIn3 = _.hasIn(hasInObject, ['a', 'b']);
console.log('hasIn3--->', hasIn3);
//hasIn3---> true
let hasIn4 = _.hasIn(hasInObject, 'b');
console.log('hasIn4--->', hasIn4);
//hasIn4---> false

//_.invert(object)
var invertObject = { 'a': 1, 'b': 2, 'c': 1 };
let invert1 = _.invert(invertObject);
console.log('invert1--->', invert1);
//invert1---> { '1': 'c', '2': 'b' }

//_.invertBy(object,[iteratee=_.identity])
let invertBy1 = _.invertBy(invertObject);
console.log('invertBy1--->', invertBy1);
//invertBy1---> { '1': [ 'a', 'c' ], '2': [ 'b' ] }
let invertBy2 = _.invertBy(invertObject, function (value) {
    return 'group' + value;
});
console.log('invertBy2--->', invertBy2);
//invertBy2---> { group1: [ 'a', 'c' ], group2: [ 'b' ] }

//_.invoke(object,path,[args])
var invokeObject = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
let invoke1 = _.invoke(invokeObject, 'a[0].b.c.slice', 1, 3);
console.log('invoke1--->', invoke1);
//invoke1---> [ 2, 3 ]

//_.keys(object)
function FooKeys() {
    this.a = 1;
    this.b = 2;
}
FooKeys.prototype.c = 3;
let keys1 = _.keys(new FooKeys);
console.log('keys1--->', keys1);
//keys1---> [ 'a', 'b' ]
let keys2 = _.keys('hi');
console.log('keys2--->', keys2);
//keys2---> [ '0', '1' ]

//_.keyIn(object)
let keysIn1 = _.keysIn(new FooKeys);
console.log('keysIn1--->', keysIn1);
//keysIn1---> [ 'a', 'b', 'c' ]

//_.mapKeys(object,[iteratee=_.identity])
let mapKeys1 = _.mapKeys({ 'a': 1, 'b': 2 }, function (value, key) {
    return key + value;
});
console.log('mapKeys1--->', mapKeys1);
//mapKeys1---> { a1: 1, b2: 2 }

//_.mapValues(object,[iteratee=_.identity])
var mapValuesUser = {
    'fred': { 'user': 'fred', 'age': 40 },
    'pebbles': { 'user': 'pebbles', 'age': 1 }
};
let mapValues1 = _.mapValues(mapValuesUser, function (o) { return o.age })
console.log('mapValues1--->', mapValues1);
//mapValues1---> { fred: 40, pebbles: 1 }
let mapValues2 = _.mapValues(mapValuesUser, 'age');
console.log('mapValues2--->', mapValues2);
//mapValues2---> { fred: 40, pebbles: 1 }

//_.merge(object,[sources])
var mergeObject = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
};
var mergeOther = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
};
let merge1 = _.merge(mergeObject, mergeOther);
console.log('merge1--->', merge1);
// merge1---> { a: [ { b: 2, c: 3 }, { d: 4, e: 5 } ] }

//_.mergeWith(object,sources,customizer)
function mergeWithCustomizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}

var mergeWithObject = { 'a': [1], 'b': [2] };
var mergeWithOther = { 'a': [3], 'b': [4] };
let mergeWith1 = _.mergeWith(mergeWithObject, mergeWithOther, mergeWithCustomizer);
console.log('mergeWith1--->', mergeWith1);
//mergeWith1---> { a: [ 1, 3 ], b: [ 2, 4 ] }

//_.omit(object,[paths])
var omitObject = { 'a': 1, 'b': '2', 'c': 3 };
let omit1 = _.omit(omitObject, ['a', 'c']);
console.log('omit1--->', omit1);
//omit1---> { b: '2' }

//_.omitBy(object,[predicate=_.identity])
var omitBy1 = _.omitBy(omitObject, _.isNumber);
console.log('omitBy1--->', omitBy1);
//omitBy1---> { b: '2' }

//_.pick(object,[paths])
let pick1 = _.pick(omitObject, ['a', 'c']);
console.log('pick1--->', pick1);
//pick1---> { a: 1, c: 3 }

//_.pickBy(object,[prodicate=_.identity])
let pickBy1 = _.pickBy(omitObject, _.isNumber);
console.log('pickBy1--->', pickBy1);
//pickBy1---> { a: 1, c: 3 }

//_.result(object,path,[defaultValue])
var resultObject = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
let result1 = _.result(resultObject, 'a[0].b.c1');
console.log('result1--->', result1);
//result1---> 3
let result2 = _.result(resultObject, 'a[0].b.c2');
console.log('result2--->', result2);
//result2---> 4
let result3 = _.result(resultObject, 'a[0].b.c3', 'default');
console.log('resutl3--->', result3);
//resutl3---> default
let result4 = _.result(resultObject, 'a[0].b.c3', _.constant('default'));
console.log('result4--->', result4);
//result4---> default

//_.set(object,path,value)
var setObject = { 'a': [{ 'b': { 'c': 3 } }] };
let set1 = _.set(setObject, 'a[0].b.c', 4);
console.log(setObject.a[0].b.c);
// 4
let set2 = _.set(setObject, ['x', '0', 'y', 'z'], 5);
console.log(setObject.x[0].y.z);
// 5

//_.setWith(object,path,value,[customizer])
var setWithObject = {};
let setWith1 = _.setWith(setWithObject, '[0][1]', 'a', Object);
console.log('setWith1--->', setWith1);
// setWith1---> { '0': { '1': 'a' } }

// _.toPairs(object)
function toPairsFoo() {
    this.a = 1;
    this.b = 2;
}
toPairsFoo.prototype.c = 3;
let toPairs1 = _.toPairs(new toPairsFoo);
console.log('toPairs1--->', toPairs1);
// toPairs1---> [ [ 'a', 1 ], [ 'b', 2 ] ]

//_.toPairsIn(object)
let toPairsIn1 = _.toPairsIn(new toPairsFoo);
console.log('toPairsIn1--->', toPairsIn1);
//toPairsIn1---> [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// _.transform(object,[iteratee=_.identity],[accumulator])
let transform1 = _.transform([2, 3, 4], function (result, n) {
    result.push(n *= n);
    return n % 2 == 0;
}, []);
console.log('transform1--->', transform1);
//transform1---> [ 4, 9 ]

let transform2 = _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
}, {});
console.log('transform2--->', transform2);
//transform2---> { '1': [ 'a', 'c' ], '2': [ 'b' ] }

//_.unset(object,path)
var unsetObject = { 'a': [{ 'b': { 'c': 7 } }] };
let unset1 = _.unset(unsetObject, 'a[0].b.c');
console.log('unset1--->', unset1);
console.log('unsetObject--->', unsetObject);
//unset1---> true
//unsetObject---> { a: [ { b: {} } ] }
let unset2 = _.unset(unsetObject, ['a', '0', 'b', 'c']);
console.log('unset2--->', unset2);
console.log('unsetObject--->', unsetObject);
//unset2---> true
//unsetObject---> { a: [ { b: {} } ] }

//_.update(object,path,updater)
var updateObject = { 'a': [{ 'b': { 'c': 3 } }] };
let update1 = _.update(updateObject, 'a[0].b.c', function (n) { return n * n });
console.log(updateObject.a[0].b.c);
// 9
let update2 = _.update(updateObject, 'x[0].y.z', function (n) { return n ? n + 1 : 0 });
console.log(updateObject.x[0].y.z);
// 0

// _.updateWith(object,path,updater,[cunstomizer])
var updateWithObject = {};
let updateWith1 = _.updateWith(updateWithObject, '[0][1]', _.constant('a'), Object);
console.log('updateWith1--->', updateWith1);
// updateWith1---> { '0': { '1': 'a' } }

// _.value(object)
function valueFoo() {
    this.a = 1;
    this.b = 2;
}
valueFoo.prototype.c = 3;
let values1 = _.values(new valueFoo);
console.log('values1--->', values1);
//values1---> [ 1, 2 ]
let values2 = _.values('hi');
console.log('values2--->', values2);
//values2---> [ 'h', 'i' ]

// _.valuesIn(object)
let valuesIn1 = _.valuesIn(new valueFoo);
console.log('valuesIn1--->', valuesIn1);
// valuesIn1---> [ 1, 2, 3 ]









































