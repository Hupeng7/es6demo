"use strict";
var _ = require('lodash');

//_.attempt(func,[args])
// Avoid throwing errors for invalid selectors.
// var elements = _.attempt(function(selector) {
//   return document.querySelectorAll(selector);
// }, '>_>');

// if (_.isError(elements)) {
//   elements = [];
// }

// _.bindAll(object, methodNames)
// var view = {
//   'label': 'docs',
//   'click': function() {
//     console.log('clicked ' + this.label);
//   }
// };

// _.bindAll(view, ['click']);
// jQuery(element).on('click', view.click);
// => Logs 'clicked docs' when clicked.

//_.cond(pairs)

var condFunc = _.cond([
    [_.matches({ 'a': 1 }), _.constant('matches A')],
    [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
    [_.stubTrue, _.constant('no match')]
]);
let cond1 = condFunc({ 'a': 1, 'b': 2 });
console.log('cond1--->', cond1);
//cond1---> matches A
let cond2 = condFunc({ 'a': 0, 'b': 1 });
console.log('cond2--->', cond2);
//cond2---> matches B
let cond3 = condFunc({ 'a': '1', 'b': '2' });
console.log('cond3--->', cond3);
//cond3---> no match

//_.conforms(source)
var conformsObject = [
    { 'a': 2, 'b': 1 },
    { 'a': 1, 'b': 2 }
];
let conforms1 = _.filter(conformsObject, _.conforms({ 'b': function (n) { return n > 1; } }));
console.log('conforms1--->', conforms1);
//conforms1---> [ { a: 1, b: 2 } ]

//_.constant(value)
var constantObject = _.times(2, _.constant({ 'a': 1 }));
console.log('constantObject--->', constantObject);
//constantObject---> [ { a: 1 }, { a: 1 } ]
console.log(constantObject[0] === constantObject[1]);
//true

//_.defaultTo(value,defaultValue)
let defaultTo1 = _.defaultTo(1, 10);
console.log('defaultTo1--->', defaultTo1);
//defaultTo1---> 1
let defaultTo2 = _.defaultTo(undefined, 10);
console.log('defaultTo2--->', defaultTo2);
//defaultTo2---> 10

//_.flow([funcs])
function square(n) {
    return n * n;
}
var addSquare = _.flow([_.add, square]);
let flow1 = addSquare(1, 2);
console.log('flow1--->', flow1);
//flow1---> 9

//_.flowRight([funcs])
var addSquareNew = _.flowRight([square, _.add]);
let flowRight1 = addSquareNew(1, 2);
console.log('flowRight1--->', flowRight1);
//flowRight1---> 9

//_.indetity(value)
var identityObject = { 'a': 1 };
console.log(_.identity(identityObject) === identityObject);
//true

//_.iteratee([func=_.indetity])
var iterateeUsers = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
let iteratee1 = _.filter(iterateeUsers, _.iteratee({ 'user': 'barney', 'active': true }));
console.log('iteratee1--->', iteratee1);
//iteratee1---> [ { user: 'barney', age: 36, active: true } ]


let iteratee2 = _.filter(iterateeUsers, _.iteratee(['user', 'fred']));
console.log('iteratee2--->', iteratee2);
//iteratee2---> [ { user: 'fred', age: 40, active: false } ]
let iteratee3 = _.filter(iterateeUsers, _.iteratee('user'));
console.log('iteratee3--->', iteratee3);
//iteratee3---> [ { user: 'barney', age: 36, active: true },
//  { user: 'fred', age: 40, active: false } ]
_.iteratee = _.wrap(_.iteratee, function (iteratee, func) {
    return !_.isRegExp(func) ? iteratee(func) : function (string) {
        return func.test(string);
    };
});
let iteratee4 = _.filter(['abc', 'def'], /ef/);
console.log('iteratee4--->', iteratee4);
//iteratee4---> [ 'def' ]

//_.matches(source)
var matchesObject = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
];
let matches1 = _.filter(matchesObject, _.matches({ 'a': 4, 'c': 6 }));
console.log('matches1--->', matches1);
//matches1---> [ { a: 4, b: 5, c: 6 } ]

//_matchesProperty(path,srcValue)
var matchesPropertyObject = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
];
let matchesProperty1 = _.find(matchesPropertyObject, _.matchesProperty('a', 4));
console.log('matchesProperty1--->', matchesProperty1);
//matchesProperty1---> { a: 4, b: 5, c: 6 }

//_.method(path,[args])
var methodObject = [
    { 'a': { 'b': _.constant(2) } },
    { 'a': { 'b': _.constant(1) } }
];
let method1 = _.map(methodObject, _.method('a.b'));
console.log('method1--->', method1);
//method1---> [ 2, 1 ]
let method2 = _.map(methodObject, _.method(['a', 'b']));
console.log('method2--->', method2);
//method2---> [ 2, 1 ]

//_.methodOf(object,[args])
var array = _.times(3, _.constant),
    object1 = { 'a': array, 'b': array, 'c': array };
let methodOf1 = _.map(['a[2]', 'c[0]'], _.methodOf(object1));
console.log('methodOf1--->', methodOf1);
//methodOf1---> [ 2, 0 ]
let methodOf2 = _.map([['a', '2'], ['c', '0']], _.methodOf(object1));
console.log('methodOf2--->', methodOf2);
//methodOf2---> [ 2, 0 ]

//_.mixin([object=lodash],source,[options={}])
function vowels(string) {
    return _.filter(string, function (v) {
        return /[aeiou]/i.test(v);
    });
}
_.mixin({ 'vowels': vowels });
let vowels1 = _.vowels('fred');
console.log('vowels1--->', vowels1);
//vowels1---> [ 'e' ]
let vowels2 = _('fred').vowels().value();
console.log('vowels2--->', vowels2);
//vowels2---> [ 'e' ]
_.mixin({ 'vowels': vowels }, { 'chain': false });
let vowels3 = _('fred').vowels();
console.log('vowels3--->', vowels3);
//vowels3---> [ 'e' ]

//_.noConflict()
var lodash = _.noConflict();
console.log('lodash--->', lodash);
//lodash--->

//_.noop()
let noop1 = _.times(2, _.noop);
console.log('noop1--->', noop1);
//noop1---> [ undefined, undefined ]

//_.nthArg([n=0])
var func = _.nthArg(1);
let func1 = func('a', 'b', 'c', 'd');
console.log('func1--->', func1);
//func1---> b
var func3 = _.nthArg(-2);
let func4 = func3('a', 'b', 'c', 'd');
console.log('func4--->', func4);
//func4---> c

//_.over([iteratees=[_.identity]])
var overFunc = _.over([Math.max, Math.min]);
let over1 = overFunc(1, 2, 3, 4);
console.log('over1--->', over1);
//over1---> [ 4, 1 ]

//_.overEvery([predicates=[_.identity]])
var overEveryFunc = _.overEvery([Boolean, isFinite]);
let overEvery1 = overEveryFunc('1');
console.log('overEvery1--->', overEvery1);
//overEvery1---> true
let overEvery2 = overEveryFunc(null);
console.log('overEvery2--->', overEvery2);
//overEvery2---> false
let overEvery3 = overEveryFunc(NaN);
console.log('overEvery3--->', overEvery3);
//overEvery3---> false

//_.overSome([predicates=[_.identity]])
var overSomeFunc = _.overSome([Boolean, isFinite]);
let overSome1 = overSomeFunc('1');
console.log('overSome1--->', overSome1);
//overSome1---> true
let overSome2 = overSomeFunc(null);
console.log('overSome2--->', overSome2);
//overSome2---> true
let overSome3 = overSomeFunc(NaN);
console.log('overSome3--->', overSome3);
//overSome3---> false

//_.property(path)
var propertyObject = [
    { 'a': { 'b': 2 } },
    { 'a': { 'b': 1 } }
]
let property1 = _.map(propertyObject, _.property('a.b'));
console.log('property1--->', property1);
//property1---> [ 2, 1 ]
let property2 = _.map(_.sortBy(propertyObject, _.property(['a', 'b'])), 'a.b');
console.log('property2--->', property2);
//property2---> [ 1, 2 ]

//_.propertyOf(object)
var propertyOfArray = [0, 1, 2],
    propertyOfObject = { 'a': propertyOfArray, 'b': propertyOfArray, 'c': propertyOfArray };
let propertyOf1 = _.map(['a[2]', 'c[0]'], _.propertyOf(propertyOfObject));
console.log('propertyOf1--->', propertyOf1);
//propertyOf1---> [ 2, 0 ]
let propertyOf2 = _.map([['a', '2'], ['c', '0']], _.propertyOf(propertyOfObject));
console.log('propertyOf2--->', propertyOf2);
//propertyOf2---> [ 2, 0 ]

//_.range([start=0],end,[step=1])
let range1 = _.range(4);
console.log('range1--->', range1);
//range1---> [ 0, 1, 2, 3 ]


let range2 = _.range(-4);
console.log('range2--->', range2);
//range2---> [ 0, -1, -2, -3 ]
let range3 = _.range(1, 5);
console.log('range3--->', range3);
//range3---> [ 1, 2, 3, 4 ]
let range4 = _.range(0, 20, 5);
console.log('range4--->', range4);
//range4---> [ 0, 5, 10, 15 ]
let range5 = _.range(0, -4, -1);
console.log('range5--->', range5);
//range5---> [ 0, -1, -2, -3 ]
let range6 = _.range(1, 4, 0);
console.log('range6--->', range6);
//range6---> [ 1, 1, 1 ]
let range7 = _.range(0);
console.log('range7--->', range7);
//range7---> []

//_.rangeRight([start=0],end,[step=1])
let rangeRight1 = _.rangeRight(4);
console.log('rangeRight1--->', rangeRight1);
//rangeRight1---> [ 3, 2, 1, 0 ]


let rangeRight2 = _.rangeRight(-4);
console.log('rangeRight2--->', rangeRight2);
//rangeRight2---> [ -3, -2, -1, 0 ]
let rangeRight3 = _.rangeRight(1, 5);
console.log('rangeRight3--->', rangeRight3);
//rangeRight3---> [ 4, 3, 2, 1 ]
let rangeRight4 = _.rangeRight(0, 20, 5);
console.log('rangeRight4--->', rangeRight4);
//rangeRight4---> [ 15, 10, 5, 0 ]
let rangeRight5 = _.rangeRight(0, -4, -1);
console.log('rangeRight5--->', rangeRight5);
//rangeRight5---> [ -3, -2, -1, 0 ]
let rangeRight6 = _.rangeRight(1, 4, 0);
console.log('rangeRight6--->', rangeRight6);
//rangeRight6---> [ 1, 1, 1 ]
let rangeRight7 = _.rangeRight(0);
console.log('rangeRight7--->', rangeRight7);
//rangeRight7---> []

//_.runInContext([context=root])
_.mixin({ 'foo': _.constant('foo') });
var lodash1 = _.runInContext();
lodash1.mixin({ 'bar': lodash1.constant('bar') });
let runInContext1 = _.isFunction(_.foo);
console.log('runInContext1--->', runInContext1);
//runInContext1---> true
let runInContext2 = _.isFunction(_.bar);
console.log('runInContext2--->', runInContext2);
//runInContext2---> false
let runInContext3 = lodash1.isFunction(lodash1.foo);
console.log('runInContext3--->', runInContext3);
//runInContext3---> false
let runInContext4 = lodash1.isFunction(lodash1.bar);
console.log('runInContext4--->', runInContext4);
//runInContext4---> true

//_.stubArray()
var stubArray1 = _.times(2, _.stubArray);
console.log('stubArray1--->', stubArray1);
// stubArray1---> [ [], [] ]
console.log(stubArray1[0] === stubArray1[1]);
// false

//_.stubFalse()
let stubFalse1 = _.times(2, _.stubFalse);
console.log('stubFalse1--->', stubFalse1);
//stubFalse1---> [ false, false ]

//_.stubObject()
var stubObjects = _.times(2, _.stubObject);
console.log('stubObjects--->', stubObjects);
//stubObjects---> [ {}, {} ]
console.log(stubObjects[0] === stubObjects[1]);
//false

//_.stubString()
let stubString1 = _.times(2, _.stubString);
console.log('stubString1--->', stubString1);
//stubString1---> [ '', '' ]

//_.stubTrue()
let stubTrue1 = _.times(2, _.stubTrue)
console.log('stubTrue1--->', stubTrue1);
//stubTrue1---> [ true, true ]

// _.times(n,[iteratee=_.identity])
let times1 = _.times(3, String);
console.log('times1--->', times1);
//times1---> [ '0', '1', '2' ]
let times2 = _.times(4, _.constant(0));
console.log('times2--->', times2);
//times2---> [ 0, 0, 0, 0 ]

//_.toPath(value)
let toPath1 = _.toPath('a.b.c');
console.log('toPath1--->', toPath1);
//toPath1---> [ 'a', 'b', 'c' ]
let toPath2 = _.toPath('a[0].b.c');
console.log('toPath2--->', toPath2);
//toPath2---> [ 'a', '0', 'b', 'c' ]

// _.uniqueId([prefix=''])
let uniqueIn1 = _.uniqueId('contact_');
console.log('uniqueIn1--->', uniqueIn1);
//uniqueIn1---> contact_1
let uniqueIn2 = _.uniqueId();
console.log('uniqueIn2--->', uniqueIn2);
//uniqueIn2---> 2























