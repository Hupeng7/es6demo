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

//_.flatten(array)
let flatten1 = _.flatten([1, [2, [3, [4]], 5]]);
console.log('flatten1--->', flatten1);
//flatten1---> [ 1, 2, [ 3, [ 4 ] ], 5 ]

//_.flattenDeep(array,)
let flattenDeep1 = _.flattenDeep([1, [2, [3, [4]], 5]]);
console.log('flattenDeep1--->', flattenDeep1);
//flattenDeep1---> [ 1, 2, 3, 4, 5 ]

//_.flattenDepth(array,[depth=1])
let flattenDeepArr = [1, [2, [3, [4]], 5]];
let flattenDepth1 = _.flattenDepth(flattenDeepArr, 1);
console.log('flattenDepth1-->', flattenDepth1);
//flattenDepth1--> [ 1, 2, [ 3, [ 4 ] ], 5 ]

let flattenDepth2 = _.flattenDepth(flattenDeepArr, 2);
console.log('flattenDepth2--->', flattenDepth2);
//flattenDepth2---> [ 1, 2, 3, [ 4 ], 5 ]

//_.fromPairs(pairs)
let fromPairs1 = _.fromPairs([['a', 1], ['b', 2]]);
console.log('fromPairs1--->', fromPairs1);
//fromPairs1---> { a: 1, b: 2 }

//_.head(array)
let head1 = _.head([1, 2, 3]);
console.log('head1--->', head1);
//head1---> 1
let head2 = _.head([]);
console.log('head2--->', head2);
//head2---> undefined

//_.indexOf(array,value,[fromIndex=0])
let indexOf1 = _.indexOf([1, 2, 1, 2], 2);
console.log('indexOf1--->', indexOf1);
//indexOf1---> 1
let indexOf2 = _.indexOf([1, 2, 1, 2], 2, 2);
console.log('indexOf2--->', indexOf2);
//indexOf2---> 3

//_.initial(array)
let initial1 = _.initial([1, 2, 3]);
console.log('initial1--->', initial1);
//initial1---> [ 1, 2 ]

//_.intersection([arrays])
let intersection1 = _.intersection([2, 1], [2, 3]);
console.log('intersection1--->', intersection1);
//intersection1---> [ 2 ]

//_.intersectionBy([arrays],[iteratee=_.identity])
let intersectionBy1 = _.intersectionBy([2.1, 1, 2], [2.3, 3.4], Math.floor);
console.log('intersectionBy1--->', intersectionBy1);
//intersectionBy1---> [ 2.1 ]
let intersectionBy2 = _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
console.log('intersectionBy2--->', intersectionBy2);
//intersectionBy2---> [ { x: 1 } ]

//_.intersectionWith([arrays],[comparator])
let intersectionWith1 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
let intersectionWith2 = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
let intersectionWith3 = _.intersectionWith(intersectionWith1, intersectionWith2, _.isEqual);
console.log('intersectionWith3--->', intersectionWith3);
//intersectionWith3---> [ { x: 1, y: 2 } ]

//_.join(array,[separator=','])
let join1 = _.join(['a', 'b', 'c'], '~');
console.log('join1--->', join1);
//join1---> a~b~c

//_.last(array)
let last1 = _.last([1, 2, 3]);
console.log('last1--->', last1);
//last1---> 3

//_.lastIndexOf(array,value,[fromIndex=array.length-1])
let lastIndexOf1 = _.lastIndexOf([1, 2, 1, 2], 2);
console.log('lastIndexOf1--->', lastIndexOf1);
//lastIndexOf1---> 3
let lastIndexOf2 = _.lastIndexOf([1, 2, 1, 2], 2, 2);
console.log('lastIndexOf2--->', lastIndexOf2);
//lastIndexOf2---> 1

//_.nth(array,[n=0])
let nthArr = ['a', 'b', 'c', 'd'];
let nth1 = _.nth(nthArr, 1);
console.log('nth1--->', nth1);
//nth1---> b
let nth2 = _.nth(nthArr, -2);
console.log('nth2--->', nth2);
//nth2---> c

//_.pull(array,[values])
let pullArr = ['a', 'b', 'c', 'a', 'b', 'c'];
let pull1 = _.pull(pullArr, 'a', 'c');
console.log('pull1--->', pull1);
//pull1---> [ 'b', 'b' ]

//_.pullAll(array,values)
let pullAll1 = _.pullAll(pullArr, ['a', 'c']);
console.log('pullAll1--->', pullAll1);
//pullAll1---> [ 'b', 'b' ]

//_.pullAllBy(array,values,[iteratee=_.identity])
let pullAllByArr = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
let pullAllBy1 = _.pullAllBy(pullAllByArr, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log('pullAllBy1--->', pullAllBy1);
//pullAllBy1---> [ { x: 2 } ]

//_.pullAllWith(array,values,[comparator])
let pullAllWithArr = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
let pullAllWith1 = _.pullAllWith(pullAllWithArr, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log('pullAllWith1--->', pullAllWith1);
//pullAllWith1---> [ { x: 1, y: 2 }, { x: 5, y: 6 } ]

//_.pullAt(array,[indexs])
let pullAtArr = ['a', 'b', 'c', 'd'];
let pullAt1 = _.pullAt(pullAtArr, [1, 3]);
console.log('pullAt1--->', pullAt1);
//pullAt1---> [ 'b', 'd' ]

//_.remove(array,[predicate=_.indentity])
let removeArr = [1, 2, 3, 4];
let remove1 = _.remove(removeArr, function (n) {
    return n % 2 == 0;
});
console.log('removeArr--->', removeArr);
console.log('remove1--->', remove1);
//removeArr---> [ 1, 3 ]
//remove1---> [ 2, 4 ]

//_.reverse(array)
let reverse1 = _.reverse([1, 2, 3]);
console.log('reverse1--->', reverse1);
//reverse1---> [ 3, 2, 1 ]

//_.slice(array,[start=0],[end=array.length])
let slice1 = _.slice([1, 2, 3, 4], 1, 3);
console.log('slice1--->', slice1);
//slice1---> [ 2, 3 ]
console.log('slice2--->', _.slice([1, 2, 3, 4], 1, 10));
//slice2---> [ 2, 3, 4 ]
console.log('slice2--->', _.slice([1, 2, 3, 4], 0, -4));
//slice2---> []  负数从右到左

//.sortedIndex(array,value)
console.log('sortedIndex1--->', _.sortedIndex([30, 50], 25));
//sortedIndex1---> 0
console.log('sortedIndex2--->', _.sortedIndex([30, 50], 40));
//sortedIndex2---> 1
console.log('sortedIndex3--->', _.sortedIndex([30, 50], 55));
//sortedIndex3---> 2

//_.sortedIndexBy(array,value,[iteratee=_.indentity])
let sortedIndexByArr = [{ 'x': 4 }, { 'x': 5 }];
let sortedIndexBy1 = _.sortedIndexBy(sortedIndexByArr, { 'x': 4 }, function (o) { return o.x });
console.log('sortedIndexBy1--->', sortedIndexBy1);
//sortedIndexBy1---> 0
let sortedIndexBy2 = _.sortedIndexBy(sortedIndexByArr, { 'x': 4 }, 'x');
console.log('sortedIndexBy2--->', sortedIndexBy2);
//sortedIndexBy2---> 0

//_.sortedIndexOf(array,value)
let sortedIndexOf1 = _.sortedIndexOf([4, 5, 5, 5, 6], 5);
console.log('sortedIndexOf1--->', sortedIndexOf1);
//sortedIndexOf1---> 1

//_.sortedLastIndex(array,value)
let sortedLastIndex1 = _.sortedLastIndex([4, 5, 5, 5, 6], 5);
console.log('sortedLastIndex1--->', sortedLastIndex1);
//sortedLastIndex1---> 4

//_.sortedLastIndexBy(array,value,[iteratee=_.indextity])
let sortedLastIndexByArr = [{ 'x': 4 }, { 'x': 5 }];
let sortedLastIndexBy1 = _.sortedLastIndexBy(sortedLastIndexByArr, { 'x': 4 }, function (o) { return o.x });
console.log('sortedLastIndexBy1--->', sortedLastIndexBy1);
//sortedLastIndexBy1---> 1
let sortedLastIndexBy2 = _.sortedLastIndexBy(sortedLastIndexByArr, { 'x': 4 }, 'x');
console.log('sortedLastIndexBy2--->', sortedLastIndexBy2);
//sortedLastIndexBy2---> 1

//_.sortedLastIndexOf(array,value)
let sortedLastIndexOf1 = _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
console.log('sortedLastIndexOf1--->', sortedLastIndexOf1);
//sortedLastIndexOf1---> 3

//_.sortedUniq(array)
let sortedUniq1 = _.sortedUniq([1, 1, 2]);
console.log('sortedUniq1--->', sortedUniq1);
//sortedUniq1---> [ 1, 2 ]

//_.sortedUniqBy(array,[iteratee])
let sortedUniqBy1 = _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
console.log('sortedUniqBy1--->', sortedUniqBy1);
//sortedUniqBy1---> [ 1.1, 2.3 ]

//_.tail(array)
let tail1 = _.tail([1, 2, 3]);
console.log('tail1--->', tail1);
//tail1---> [ 2, 3 ]

//_.take(array,[n=1])
let take1 = _.take([1, 2, 3]);
console.log('take1--->', take1);
//take1---> [ 1 ]
let take2 = _.take([1, 2, 3], 2);
console.log('take2--->', take2);
//take2---> [ 1, 2 ]
let take3 = _.take([1, 2, 3], 5);
console.log('take3--->', take3);
//take3---> [ 1, 2, 3 ]
let take4 = _.take([1, 2, 3], 0);
console.log('take4--->', take4);
//take4---> []

//_.takeRight(array,[n=1])
let takeRight1 = _.takeRight([1, 2, 3]);
console.log('takeRight1--->', takeRight1);
//takeRight1---> [ 3 ]
let takeRight2 = _.takeRight([1, 2, 3], 2);
console.log('takeRight2--->', takeRight2);
//takeRight2---> [ 2, 3 ]
let takeRight3 = _.takeRight([1, 2, 3], 5);
console.log('takeRight3--->', takeRight3);
//takeRight3---> [ 1, 2, 3 ]
let takeRight4 = _.takeRight([1, 2, 3], 0);
console.log('takeRight4', takeRight4);
//takeRight4 []

//_.takeRightWhile(array,[predicate=_.indentity])
let takeRightWhileArr = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];
let takeRightWhile1 = _.takeRightWhile(takeRightWhileArr, function (o) { return !o.active });
console.log('tabkeRightWhile1--->', takeRightWhile1);
//tabkeRightWhile1---> [ { user: 'fred', active: false },
// { user: 'pebbles', active: false } ]
let takeRightWhile2 = _.takeRightWhile(takeRightWhileArr, { 'user': 'pebbles', 'active': false });
console.log('takeRightWhile2--->', takeRightWhile2);
//takeRightWhile2---> [ { user: 'pebbles', active: false } ]
let takeRightWhile3 = _.takeRightWhile(takeRightWhileArr, ['active', false]);
console.log('takeRightWhile3--->', takeRightWhile3);
//takeRightWhile3---> [ { user: 'fred', active: false },
//  { user: 'pebbles', active: false } ]
let takeRightWhile4 = _.takeRightWhile(takeRightWhileArr, 'active');
console.log('takeRightWhile4--->', takeRightWhile4);
//takeRightWhile4---> []

//_.takeWhile(array,[predicate=_.indentity])
let takeWhileArr = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];
let takeWhile1 = _.takeWhile(takeWhileArr, function (o) { return !o.active });
console.log('takeWhile1--->', takeWhile1);
//takeWhile1---> [ { user: 'barney', active: false },
//  { user: 'fred', active: false } ]
let takeWhile2 = _.takeWhile(takeWhileArr, { 'user': 'barney', 'active': false });
console.log('takeWhile2--->', takeWhile2);
//takeWhile2---> [ { user: 'barney', active: false } ]
let takeWhile3 = _.takeWhile(takeWhileArr, ['active', false]);
console.log('takeWhile3--->', takeWhile3);
//takeWhile3---> [ { user: 'barney', active: false },
//  { user: 'fred', active: false } ]
let takeWhile4 = _.takeWhile(takeWhileArr, 'active');
console.log('takeWhile4--->', takeWhile4);
//takeWhile4---> []

//_.union([arrays])
let union1 = _.union([2], [1, 2]);
console.log('union1--->', union1);
//union1---> [ 2, 1 ]

//_.unionBy([arrays],[iteratee=_.identity])
let unionBy1 = _.unionBy([2.1], [1.2, 2.3], Math.floor);
console.log('unionBy1--->', unionBy1);
//unionBy1---> [ 2.1, 1.2 ]
let unionBy2 = _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
console.log('unionBy2--->', unionBy2);
//unionBy2---> [ { x: 1 }, { x: 2 } ]

//_.unionWith([arrays],[comparator])
let unionWith1 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
let unionWith2 = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
let unionWith3 = _.unionWith(unionWith1, unionWith2, _.isEqual);
console.log('unionWith3--->', unionWith3);
//unionWith3---> [ { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 } ]

//_.uniq(array)
let uniq1 = _.uniq([2, 1, 2]);
console.log('uniq1--->', uniq1);
//uniq1---> [ 2, 1 ]

//_.uniqBy(array,[iteratee=_.identity])
let uniqBy1 = _.uniqBy([2.1, 1.2, 2.3], Math.floor);
console.log('uniqBy1--->', uniqBy1);
//uniqBy1---> [ 2.1, 1.2 ]
let uniqBy2 = _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
console.log('uniqBy2--->', uniqBy2);
//uniqBy2---> [ { x: 1 }, { x: 2 } ]

//_.uniqWith(array,[comparator])
let uniqWithArr = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
let uniqWith1 = _.uniqWith(uniqWithArr, _.isEqual);
console.log('uniqWith1--->', uniqWith1);
//uniqWith1---> [ { x: 1, y: 2 }, { x: 2, y: 1 } ]

//_.unzip(array)
let zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log('zipped--->', zipped);
//zipped---> [ [ 'a', 1, true ], [ 'b', 2, false ] ]
let unzip1 = _.unzip(zipped);
console.log('unzip1--->', unzip1);
//unzip1---> [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]

//_.unzipWith(array,[iteratee=_.indentity])
let zipped1 = _.zip([1, 2], [10, 20], [100, 200]);
console.log('zipped1--->', zipped1);
//zipped1---> [ [ 1, 10, 100 ], [ 2, 20, 200 ] ]
let unzipWith1 = _.unzipWith(zipped1, _.add);
console.log('unzipWith1--->', unzipWith1);
//unzipWith1---> [ 3, 30, 300 ]

//_.with(array,[values])
let without1 = _.without([2, 1, 2, 3], 1, 2);
console.log('without1--->', without1);
//without1---> [ 3 ]

//_.xor([arrays])
let xor1 = _.xor([2, 1], [2, 3]);
console.log('xor1--->', xor1);
//xor1---> [ 1, 3 ]

//_.xorBy([arrays],[iteratee=_indentity])
let xorBy1 = _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
console.log('xorBy1--->', xorBy1);
//xorBy1---> [ 1.2, 3.4 ]
let xorBy2 = _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
console.log('xorBy2--->', xorBy2);
//xorBy2---> [ { x: 2 } ]

//_.xorWith(array,[comparator])
let xorWith1 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
let xorWith2 = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
let xorWith3 = _.xorWith(xorWith1, xorWith2, _.isEqual);
console.log('xorWith3--->', xorWith3);
//xorWith3---> [ { x: 2, y: 1 }, { x: 1, y: 1 } ]

//_.zip([arrays])
let zip1 = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log('zip1--->', zip1);
//zip1---> [ [ 'a', 1, true ], [ 'b', 2, false ] ]












































