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





















