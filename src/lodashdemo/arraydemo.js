"use strict";
var _ = require('lodash');

/**
 * Array
 */
//_.chunk(array,[size=1])
let arr = ['a', 'b', 'c', 'd'];
let chunk1 = _.chunk(arr, 2);
console.log('chunk 2--->', chunk1);
//chunk 2---> [ [ 'a', 'b' ], [ 'c', 'd' ] ]

chunk1 = _.chunk(arr, 3);
console.log('chunk 3--->', chunk1);
//chunk 3---> [ [ 'a', 'b', 'c' ], [ 'd' ] ]

//_.compact(array)
let compact1 = _.compact([0, 1, false, 2, '', 3]);
console.log('compact1--->', compact1);
//compact1---> [ 1, 2, 3 ]

//_.concat(array,[values])
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log('other--->', other);
//other---> [ 1, 2, 3, [ 4 ] ]
console.log('array--->', array);
//array---> [ 1 ]

//_.difference(array,[values])
let difference1 = _.difference([2, 1], [2, 3]);
console.log('difference1--->', difference1);
//difference1---> [ 1 ]

//_.differeneceBy(array,[values],[iteratee=.identity])
let differenceBy1 = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
console.log('differenceBy--->', differenceBy1);
//differenceBy---> [ 1.2 ]

let differenceBy2 = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
console.log('differenceBy2--->', differenceBy2);
//differenceBy2---> [ { x: 2 } ]

//_.differenceWith(array,[values],[comparator])
var objects1 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
let differenceWith1 = _.differenceWith(objects1, [{ 'x': 1, 'y': 2 }], _.isEqual);
console.log('differenceWith1--->', differenceWith1);
//differenceWith1---> [ { x: 2, y: 1 } ]

//_.drop(array,[n=1])
let drop1 = _.drop([1, 2, 3]);
console.log('drop1--->', drop1);
//drop1---> [ 2, 3 ]
let drop2 = _.drop([1, 2, 3], 2);
console.log('drop2--->', drop2);
//drop2---> [ 3 ]
let drop3 = _.drop([1, 2, 3], 5);
console.log('drop3--->', drop3);
//drop3---> []
let drop4 = _.drop([1, 2, 3], 0);
console.log('drop4--->', drop4);
//drop4---> [ 1, 2, 3 ]

//_.dropRight(array,[n=1])
let dropRight1 = _.dropRight([1, 2, 3]);
console.log('dropRight1--->', dropRight1);
//dropRight1---> [ 1, 2 ]
let dropRight2 = _.dropRight([1, 2, 3], 2);
console.log('dropRight2--->', dropRight2);
//dropRight2---> [ 1 ]
let dropRight3 = _.dropRight([1, 2, 3], 5);
console.log('dropRight3--->', dropRight3);
//dropRight3---> []
let dropRight4 = _.dropRight([1, 2, 3], 0);
console.log('dropRight4--->', dropRight4);
//dropRight4---> [ 1, 2, 3 ]

//_.dropRightWhile(array,[predicat=_.indentity])
let users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'frey', 'active': false },
    { 'user': 'pebbles', 'active': false },
];
let dropRightWhile1 = _.dropRightWhile(users, function (o) { return !o.active });
console.log('dropRightWhile1--->', dropRightWhile1);
//dropRightWhile1---> [ { user: 'barney', active: true } ]
let dropRightWhile2 = _.dropRightWhile(users, { 'user': 'pabbles', 'avtive': false });
console.log('dropRightWhile2--->', dropRightWhile2);
//dropRightWhile2---> [ { user: 'barney', active: true },
//   { user: 'frey', active: false },
//   { user: 'pebbles', active: false } ]
let dropRightWhile3 = _.dropRightWhile(users, ['active', false]);
console.log('dropRightWhile3--->', dropRightWhile3);
//dropRightWhile3---> [ { user: 'barney', active: true } ]
let dropRightWhile4 = _.dropRightWhile(users, 'active');
console.log('dropRightWhile4--->', dropRightWhile4);
//dropRightWhile4---> [ { user: 'barney', active: true },
//   { user: 'frey', active: false },
//   { user: 'pebbles', active: false } ]

//_.dropWhile(array,[predicate=_.indentity])
let users2 = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pabbles', 'active': true }
];
let dropWhile1 = _.dropRightWhile(users2, function (o) { return !o.active });
console.log('dropWhile1--->', dropWhile1);
//dropWhile1---> [ { user: 'barney', active: false },
//   { user: 'fred', active: false },
//   { user: 'pabbles', active: true } ]
let dropWhile2 = _.dropWhile(users2, { 'user': 'barney', 'active': false });
console.log('dropWhile2--->', dropWhile2);
//dropWhile2---> [ { user: 'fred', active: false },
//  { user: 'pabbles', active: true } ]
let dropWhile3 = _.dropWhile(users2, ['active', false]);
console.log('dropWhile3--->', dropWhile3);
//dropWhile3---> [ { user: 'pabbles', active: true } ]
let dropWhile4 = _.dropWhile(users2, 'active');
console.log('dropWhile4--->', dropWhile4);
//dropWhile4---> [ { user: 'barney', active: false },
//   { user: 'fred', active: false },
//   { user: 'pabbles', active: true } ]

//_.fill(array,value,[start=0],[end=array.length])
let fillArray = [1, 2, 3];
let fill1 = _.fill(fillArray, 'a');
console.log('fill1--->', fill1);
//fill1---> [ 'a', 'a', 'a' ]
let fill2 = _.fill(Array(3), 2);
console.log('fill2--->', fill2);
//fill2---> [ 2, 2, 2 ]
let fill3 = _.fill([4, 6, 8, 10], '*', 1, 3);
console.log('fill3--->', fill3);
//fill3---> [ 4, '*', '*', 10 ]

//_.findIndex(array,[predicate=_.indentity],[fromIndex=0])
let users3 = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];
let findIndex1 = _.findIndex(users3, function (o) { return o.user == 'barney'; });
console.log('findIndex1--->', findIndex1);
//findIndex1---> 0
let findIndex2 = _.findIndex(users3, { 'user': 'fred', 'active': false });
console.log('findIndex2--->', findIndex2);
//findIndex2---> 1
let findIndex3 = _.findIndex(users3, 'active');
console.log('findIndex3--->', findIndex3);
//findIndex3---> 2
let findIndex4 = _.findIndex(users3, ['active', false]);
console.log('findIndex4--->', findIndex4);
//findIndex4---> 0

//_.findLastIndex(array,[predicate=_.indentity],[fromIndex=array.length-1])
let users4 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];
let findLastIndex1 = _.findLastIndex(users4, function (o) { return o.user == 'pebbles' });
console.log('findLastIndex1--->', findLastIndex1);
//findLastIndex1---> 2
let findLastIndex2 = _.findLastIndex(users4, { 'user': 'barney', 'active': true });
console.log('findLastIndex2--->', findLastIndex2);
//findLastIndex2---> 0
let findLastIndex3 = _.findLastIndex(users4, ['active', false]);
console.log('findLastIndex3--->', findLastIndex3);
//findLastIndex3---> 2
let findLastIndex4 = _.findLastIndex(users4, 'active');
console.log('findLastIndex4--->', findLastIndex4);
//findLastIndex4---> 0
