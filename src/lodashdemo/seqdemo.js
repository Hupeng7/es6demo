"use strict";
var _ = require('lodash');

//_(value)
function square(n) {
    return n * n;
}
var wrapped = _([1, 2, 3]);
// Returns an unwrapped value
let squares2 = wrapped.reduce(_.add);
console.log('squares2--->', squares2);
//squares2---> 6
var squares = wrapped.map(square);
let squares1 = _.isArray(squares);
console.log('squares1--->', squares1);
//squares1---> false
let squares3 = _.isArray(squares.value());
console.log('squares3--->', squares3);
//squares3---> true

//_.chain(value)
var chainUsers = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
];
var youngest = _.chain(chainUsers)
    .sortBy('age')
    .map(function (o) {
        return o.user + ' is ' + o.age;
    })
    .head()
    .value();
console.log('younest--->', youngest);
// younest---> pebbles is 1

// _.tap(value,interceptor)
let tap1 = _([1, 2, 3])
    .tap(function (array) {
        array.pop();
    })
    .reverse()
    .value();
console.log('tap1--->', tap1);
// tap1---> [ 2, 1 ]

// _.thru(value,interceptor)
let thru1 = _(' abc ')
    .chain()
    .trim()
    .thru(function (value) {
        return [value];
    })
    .value();
console.log('thru1--->', thru1);
//thru1---> [ 'abc' ]

// _.prototype[Symbol.iterator]
var prototypeWrapped = _([1, 2]);
let prototype1 = prototypeWrapped[Symbol.iterator]() === prototypeWrapped;
console.log('prototypr1--->', prototype1);
//prototypr1---> true
let prototype2 = Array.from(prototypeWrapped);
console.log('prototype2--->', prototype2);
//prototype2---> [ 1, 2 ]

// _.prototype.at([paths])
var prototypeatObject = { 'a': [{ 'b': { 'c': 3 } }, 4] };
let prototypeat1 = _(prototypeatObject).at('a[0].b.c', 'a[1]').value();
console.log('prototypeat1--->', prototypeat1);
//prototypeat1---> [ 3, 4 ]

// _.prototype.chain()
var prototypechainUsers = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 }
];
let head1 = _(prototypechainUsers).head();
console.log('head1--->', head1);
//head1---> { user: 'barney', age: 36 }
let head2 = _(prototypechainUsers)
    .chain()
    .head()
    .pick('user')
    .value();
console.log('head2--->', head2);
//head2---> { user: 'barney' }

// _.prototype.commit()
var commitArray = [1, 2];
var commitWrapped = _(commitArray).push(3);
console.log('commitArray--->', commitArray);
//commitArray---> [ 1, 2 ]
commitWrapped = commitWrapped.commit();
console.log('commitArray--->', commitArray);
//commitArray---> [ 1, 2, 3 ]
var commit1 = commitWrapped.last();
console.log('commit1--->', commit1);
//commit1---> 3
console.log('commitArray--->', commitArray);
//commitArray---> [ 1, 2, 3 ]

//_.prototype.next()
var nextWrapped = _([1, 2]);
let next1 = nextWrapped.next();
console.log('next1--->', next1);
//next1---> { done: false, value: 1 }
let next2 = nextWrapped.next();
console.log('next2--->', next2);
//next2---> { done: false, value: 2 }
let next3 = nextWrapped.next();
console.log('next3--->', next3);
//next3---> { done: true, value: undefined }

//_.prototype.plant(value)
var plantWrapped = _([1, 2]).map(square);
var plantOther = plantWrapped.plant([3, 4]);
let plant1 = plantOther.value();
console.log('plant1--->', plant1);
//plant1---> [ 9, 16 ]
let plant2 = plantWrapped.value();
console.log('plant2--->', plant2);
//plant2---> [ 1, 4 ]

// _.prototype.reverse()
var reverseArray = [1, 2, 3];
var reverse1 = _(reverseArray).reverse().value();
console.log('reverse1--->', reverse1);
//reverse1---> [ 3, 2, 1 ]
console.log('reverseArray--->', reverseArray);
//reverseArray---> [ 3, 2, 1 ]

//_.prototype.value()
let value1 = _([1, 2, 3]).value();
console.log('value1--->', value1);
//value1---> [ 1, 2, 3 ]


































































