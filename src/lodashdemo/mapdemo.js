"use strict"

var _ = require('lodash');

/**
 * map
 */

//_.countBy(collection,[iteratee=_.indentity])
let countBy1 = _.countBy([6.1, 4.2, 6.3], Math.floor);
console.log('countBy1--->', countBy1);
//countBy1---> { '4': 1, '6': 2 }
let countBy2 = _.countBy(['one', 'two', 'three'], 'length');
console.log('countBy2--->', countBy2);
//countBy2---> { '3': 2, '5': 1 }

//_.every(collection,[predicate=_.identity])
let every1 = _.every([true, 1, null, 'yes'], Boolean);
console.log('every1--->', every1);
//every1---> false

let everyArr = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': false },
];
let every2 = _.every(everyArr, { 'user': 'barney', 'active': false });
console.log('every2--->', every2);
//every2---> false
let every3 = _.every(everyArr, ['active', false]);
console.log('every3--->', every3);
//every3---> true
let every4 = _.every(everyArr, 'active');
console.log('every4--->', every4);
//every4---> false

//_.filter(collection,[predicate=_.identity])
let filterArr = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
let filter1 = _.filter(filterArr, function (o) { return !o.active });
console.log('filter1--->', filter1);
//filter1---> [ { user: 'fred', age: 40, active: false } ]
let filter2 = _.filter(filterArr, { 'age': 36, 'active': true });
console.log('filter2--->', filter2);
//filter2---> [ { user: 'barney', age: 36, active: true } ]
let filter3 = _.filter(filterArr, ['active', false]);
console.log('filter3--->', filter3);
//filter3---> [ { user: 'fred', age: 40, active: false } ]
let filter4 = _.filter(filterArr, 'active');
console.log('filter4--->', filter4);
//filter4---> [ { user: 'barney', age: 36, active: true } ]

//_.find(collection,[predicate=_.indentity],[fromIndex=0])
let findArr = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
let find1 = _.find(findArr, function (o) { return o.age < 40 });
console.log('find1--->', find1);
//find1---> { user: 'barney', age: 36, active: true }
let find2 = _.find(findArr, { 'age': 1, 'active': true });
console.log('find2--->', find2);
//find2---> { user: 'pebbles', age: 1, active: true }
let find3 = _.find(findArr, ['active', false]);
console.log('find3--->', find3);
//find3---> { user: 'fred', age: 40, active: false }
let find4 = _.find(findArr, 'active');
console.log('find4--->', find4);
//find4---> { user: 'barney', age: 36, active: true }

//_.findLast(collection,[predicate=_.identity],[fromIndex=conllection.length-1])
let findLast1 = _.findLast([1, 2, 3, 4], function (n) {
    return n % 2 == 1;
});
console.log('findLast1--->', findLast1);
//findLast1---> 3

//_.flatMap(collection,[iteratee=_.indentity])
function duplicate(n) {
    return [n, n];
}
let flatMap1 = _.flatMap([1, 2], duplicate);
console.log('flatMap1--->', flatMap1);
//flatMap1---> [ 1, 1, 2, 2 ]

//_.flatMapDeep(collection,[iteratee=_.identity])
function dulicateDeep(n) {
    return [[[n, n]]];
}
let flatMapDeep1 = _.flatMapDeep([1, 2], dulicateDeep);
console.log('flatMapDeep1--->', flatMapDeep1);
//flatMapDeep1---> [ 1, 1, 2, 2 ]

//_.flatMapDepth(collection,[iteratee=_.identity],[depth=1])
let flatMapDepth1 = _.flatMapDepth([1, 2], dulicateDeep, 2);
console.log('flatMapDepth1--->', flatMapDepth1);
//flatMapDepth1---> [ [ 1, 1 ], [ 2, 2 ] ]

//_.forEach(collection,[iteratee=_.identity])
let forEach1 = _.forEach([1, 2], function (value) {
    console.log(value);
})
//1
//2
let forEach2 = _.forEach({ 'a': 1, 'b': 2 }, function (value, key) {
    console.log(key);
})
//a
//b

//_.forEachRight(collection,[iteratee=_.identity])
let forEachRight1 = _.forEachRight([1, 2], function (value) {
    console.log(value);
});
//2
//1

//_.groupBy(collection,[iteratee=_.identity])
let groupBy1 = _.groupBy([6.1, 4.2, 6.3], Math.floor);
console.log('groupBy1--->', groupBy1);
//groupBy1---> { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
let groupBy2 = _.groupBy(['one', 'two', 'three'], 'length');
console.log('groupBy2--->', groupBy2);
//groupBy2---> { '3': [ 'one', 'two' ], '5': [ 'three' ] }

//_.includes(collection,value,[fromIndex=0])
let includes1 = _.includes([1, 2, 3], 1);
console.log('includes1--->', includes1);
//includes1---> true
let includes2 = _.includes([1, 2, 3], 1, 2);
console.log('includes2--->', includes2);
//includes2---> false
let includes3 = _.includes({ 'a': 1, 'b': 2 }, 1);
console.log('includes3--->', includes3);
//includes3---> true
let includes4 = _.includes('abcd', 'bc');
console.log('includes4--->', includes4);
//includes4---> true
let includes5 = _.includes('abcd', 'bd');
console.log('includes5--->', includes5);
//includes5---> false

//_.invokeMap(collection,path,[args])
let invokeMap1 = _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
console.log('invokeMap1--->', invokeMap1);
//invokeMap1---> [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
let invokeMap2 = _.invokeMap([123, 456], String.prototype.split, '');
console.log('invokeMap2--->', invokeMap2);
//invokeMap2---> [ [ '1', '2', '3' ], [ '4', '5', '6' ] ]

//_.keyBy(collection,[iteratee=_.identity])
let keyByArr = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];
let keyBy1 = _.keyBy(keyByArr, function (o) {
    return String.fromCharCode(o.code);
});
console.log('keyBy1--->', keyBy1);
//keyBy1---> { a: { dir: 'left', code: 97 }, d: { dir: 'right', code: 100 } }
let keyBy2 = _.keyBy(keyByArr, 'dir');
console.log('keyBy2', keyBy2);
//keyBy2 { left: { dir: 'left', code: 97 },
//  right: { dir: 'right', code: 100 } }

//_.map(collection,[iteratee=_.identity])
function square(n) {
    return n * n;
}
let map1 = _.map([4, 8], square);
console.log('map1--->', map1);
//map1---> [ 16, 64 ]
let map2 = _.map({ 'a': 4, 'b': 8 }, square);
console.log('map2--->', map2);
//map2---> [ 16, 64 ]
let mapArr = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];
let map3 = _.map(mapArr, 'user');
console.log('map3--->', map3);
//map3---> [ 'barney', 'fred' ]

//_.orderBy(collection,[iterartees=[_.indentity]],[orders])
let orderByArr = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];
let orderBy1 = _.orderBy(orderByArr, ['user', 'age'], ['asc', 'desc']);
console.log('orderBy1--->', orderBy1);
//orderBy1---> [ { user: 'barney', age: 36 },
//  { user: 'barney', age: 34 },
// { user: 'fred', age: 48 },
//  { user: 'fred', age: 40 } ]

//_.partition(collection,[predicate=_.indentity])
let partitionArr = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': false }
];
let partition1 = _.partition(partitionArr, function (o) { return o.active; });
console.log('partition1--->', partition1);
//partition1---> [ [ { user: 'fred', age: 40, active: true } ],
//  [ { user: 'barney', age: 36, active: false },
//    { user: 'pebbles', age: 1, active: false } ] ]


let partition2 = _.partition(partitionArr, { 'age': 1, 'active': false });
console.log('partition2--->', partition2);
//partition2---> [ [ { user: 'pebbles', age: 1, active: false } ],
//  [ { user: 'barney', age: 36, active: false },
//    { user: 'fred', age: 40, active: true } ] ]

let partition3 = _.partition(partitionArr, ['active', false]);
console.log('partition3--->', partition3);
//partition3---> [ [ { user: 'barney', age: 36, active: false },
//    { user: 'pebbles', age: 1, active: false } ],
//  [ { user: 'fred', age: 40, active: true } ] ]

let partition4 = _.partition(partitionArr, 'active');
console.log('partition4--->', partition4);
//partition4---> [ [ { user: 'fred', age: 40, active: true } ],
//  [ { user: 'barney', age: 36, active: false },
//    { user: 'pebbles', age: 1, active: false } ] ]


let a = [];
console.log(a && a.length==0);



















