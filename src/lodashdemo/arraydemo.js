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

