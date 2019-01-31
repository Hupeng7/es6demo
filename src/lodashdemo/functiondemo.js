"use strict";
var _ = require('lodash');

//_.after(n,func) the demo has problem
var saves = ['frofile', 'setting'];

var done = _.after(saves.length, function () {
    console.log('done saving!');
});

var asyncSave = function ({ type, complete }) {
    console.log(type, complete);
};
_.forEach(saves, function (type) {
    asyncSave({ 'type': type, 'complete': done });
});

//_.ary(func,[n=func.length])
let ary1 = _.map(['6', '8', '10'], _.ary(parseInt, 1));
console.log('ary1--->', ary1);
//ary1---> [ 6, 8, 10 ]

//_.before(n,func)
//let before1 = jQuery(element).on('click', _.before(5, addContactToList);)
// => Allows adding up to 4 contacts to the list.

//_.bind(func,thisArg,[partials])
//       方法名 this参数  其他参数
function greet(greeting, punctuation) {
    console.log('greeting: ', greeting);
    console.log('punctuation: ', punctuation);
    return greeting + ' ' + this.user + punctuation;
}
var object = { 'user': 'fred' };
var bound = _.bind(greet, object, 'hi');
let res1 = bound('!');
console.log('res1--->', res1);
//res1---> hi fred!

var bound1 = _.bind(greet, object, _, '!');
let res2 = bound1('hi');
console.log('res2--->', res2);
//res2---> hi fred!

var bound3 = _.bind(greet, object, _, _, '!');
let res3 = bound3('hi');
console.log('res3--->', res3);
//res3---> hi fredundefined

//_.bindKey(object,key,[partials])
var bindKeyObject = {
    'user': 'fred',
    'greet': function (greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
};

var bindKey1 = _.bindKey(bindKeyObject, 'greet', 'hi');
let bindKey1Res1 = bindKey1('!');
console.log('bindKey1Res1--->', bindKey1Res1);
//bindKey1Res1---> hi fred!
bindKeyObject.greet = function (greeting, punctuation) {
    return greeting + 'ya ' + this.user + punctuation;
};
let bindKey1Res2 = bindKey1('!');
console.log('bindKey1Res2--->', bindKey1Res2);
//bindKey1Res2---> hiya fred!
var bindKey2 = _.bindKey(bindKeyObject, 'greet', _, '!');
let bindKey2Res1 = bindKey2('hi');
console.log('bindKey2Res1--->', bindKey2Res1);
//bindKey2Res1---> hiya fred!

//_.curry(func,[arity=func.length])
var abc = function (a, b, c) {
    return [a, b, c];
}
var curried = _.curry(abc);
var curried1 = curried(1)(2)(3);
console.log('curried1--->', curried1);
//curried1---> [ 1, 2, 3 ]
var curried2 = curried(1, 2)(3);
console.log('curried2--->', curried2);
//curried2---> [ 1, 2, 3 ]
var curried3 = curried(1, 2, 3);
console.log('curried3--->', curried3);
//curried3---> [ 1, 2, 3 ]
var curried4 = curried(1)(_, 3)(2);
console.log('curried4--->', curried4);
//curried4---> [ 1, 2, 3 ]

//_.curryRight(func,[arity=func.length])
var curryRight = _.curryRight(abc);
var curryRight1 = curryRight(3)(2)(1);
console.log('curryRight1--->', curryRight1);
//curryRight1---> [ 1, 2, 3 ]
var curryRight2 = curryRight(2, 3)(1);
console.log('curryRight2--->', curryRight2);
//curryRight2---> [ 1, 2, 3 ]
var curryRight3 = curryRight(1, 2, 3);
console.log('curryRight3--->', curryRight3);
//curryRight3---> [ 1, 2, 3 ]
var curryRight4 = curryRight(3)(1, _)(2);
console.log('curryRight4--->', curryRight4);
//curryRight4---> [ 1, 2, 3 ]

//_.debounce(func,[wait=0],[options={}])
// // Avoid costly calculations while the window size is in flux.
// jQuery(window).on('resize', _.debounce(calculateLayout, 150));

// // Invoke `sendMail` when clicked, debouncing subsequent calls.
// jQuery(element).on('click', _.debounce(sendMail, 300, {
//   'leading': true,
//   'trailing': false
// }));

// // Ensure `batchLog` is invoked once after 1 second of debounced calls.
// var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
// var source = new EventSource('/stream');
// jQuery(source).on('message', debounced);

// // Cancel the trailing debounced invocation.
// jQuery(window).on('popstate', debounced.cancel);

//_.defer(func,[args])
_.defer(function (text) {
    console.log(text);
}, 'deferred 111');
// => Logs 'deferred' after one millisecond.
//deferred 111

//_.delay(func,wait,[args])
_.delay(function (text) {
    console.log(text);
}, 2000, 'later');
// => Logs 'later' after one second.

//_.flip(func)
//creates a function that invokes func with arguments reversed.
var flipped = _.flip(function () {
    return _.toArray(arguments);
});
var flipped1 = flipped('a', 'b', 'c', 'd');
console.log('flipped1--->', flipped1);
//flipped1---> [ 'd', 'c', 'b', 'a' ]

//_.memoize(func,[resolver])
var memoize1 = { 'a': 1, 'b': 2 };
var memoize2 = { 'c': 3, 'd': 4 };
var values = _.memoize(_.values);
var memoize3 = values(memoize1);
console.log('memoize3--->', memoize3);
//memoize3---> [ 1, 2 ]
var memoize4 = values(memoize2);
console.log('memoize4--->', memoize4);
//memoize4---> [ 3, 4 ]
memoize1.a = 2;
var memoize5 = values(memoize1);
console.log('memoize5--->', memoize5);
//memoize5---> [ 1, 2 ]

values.cache.set(memoize1, ['a', 'b']);
var memoize6 = values(memoize1);
console.log('memoize6--->', memoize6);
//memoize6---> [ 'a', 'b' ]
_.memoize.Cache = WeakMap;

//_.negate(predicate)
function isEven(n) {
    return n % 2 == 0;
}
let negate1 = _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
console.log('negate1--->', negate1);
//negate1---> [ 1, 3, 5 ]

//_.once(func)
// var initialize = _.once(createApplication);
// initialize();
// initialize();
//

//_.overArgs(func,[transform=[_.identity]])
function doubled(n) {
    return n * 2;
}
function square(n) {
    return n * n;
}
var func = _.overArgs(function (x, y) {
    return [x, y];
}, [square, doubled]);

var func1 = func(9, 3);
console.log('func1--->', func1);
//func1---> [ 81, 6 ]

var func2 = func(10, 5);
console.log('func2--->', func2);
//func2---> [ 100, 10 ]

//_.partial(func,[partials])
function greet1(greeting, name) {
    return greeting + ' ' + name;
}
var sayHelloTo = _.partial(greet1, 'hello');
var sayHelloTo1 = sayHelloTo('fred');
console.log('sayHelloTo1--->', sayHelloTo1);
//sayHelloTo1---> hello fred

var greetFred = _.partial(greet1, _, 'fred');
var greetFred1 = greetFred('hi');
console.log('greetFred1--->', greetFred1);
//greetFred1---> hi fred

//_.partialRight(func,[partials])
var partialRight1 = _.partialRight(greet1, 'fred');
var partialRight2 = partialRight1('hi');
console.log('partialRight2--->', partialRight2);
//partialRight2---> hi fred
var sayHelloTo2 = _.partialRight(greet1, 'hello', _);
var sayHelloTo3 = sayHelloTo2('fred');
console.log('sayHelloTo3--->', sayHelloTo3);
//sayHelloTo3---> hello fred

//_.rearg(func,indexes)
var rearged = _.rearg(function (a, b, c) {
    return [a, b, c];
}, [2, 0, 1]);
let rearged1 = rearged('b', 'c', 'a');
console.log('rearged1--->', rearged1);
//rearged1---> [ 'a', 'b', 'c' ]

//_.rest(func,[start=func.length-1])
var say = _.rest(function (what, names) {
    return what + ' ' + _.initial(names).join(', ') +
        (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});

var say1 = say('hello', 'fred', 'barney', 'pebbles');
console.log('say1--->', say1);
//say1---> hello fred, barney, & pebbles

//_.spread(func,[start=0])
var spreadSay = _.spread(function (who, what) {
    return who + ' says ' + what;
});
var spreadSay1 = say(['fred', 'hello']);
console.log('spreadSay1--->', spreadSay1);
//
var numbers = Promise.all([
    Promise.resolve(40),
    Promise.resolve(36)
]);
numbers.then(_.spread(function (x, y) {
    return x + y;
}))
    .then((res) => {
        console.log('spreadSay2--->', res);
    });
//spreadSay2---> 76

//_.throttle(func,[wait=0],[options={}])
// // Avoid excessively updating the position while scrolling.
// jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
// var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
// jQuery(element).on('click', throttled);

// // Cancel the trailing throttled invocation.
// jQuery(window).on('popstate', throttled.cancel);

//_.unary(func)
var unary1 = _.map(['6', '8', '10'], _.unary(parseInt));
console.log('unary1--->', unary1);
//unary1---> [ 6, 8, 10 ]

//_.wrap(value,[wrapper=identityssss])
var p = _.wrap(_.escape, function (func, text) {
    return '<p>' + func(text) + '</p>';
});
var p1 = p('fred,barney, & pebbles');
console.log('p1--->', p1);
//p1---> <p>fred,barney, &amp; pebbles</p>





















