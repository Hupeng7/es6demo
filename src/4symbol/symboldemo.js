/**
 * 前言
 实际上，Symbol 的很多特性都无法模拟实现……所以先让我们回顾下有哪些特性，
 然后挑点能实现的……当然在看的过程中，你也可以思考这个特性是否能实现，如果可以实现，
 该如何实现。
 回顾
 ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。
 */

// 1. Symbol 值通过 Symbol 函数生成，使用 typeof，结果为 "symbol"
console.log('1--------->')
var s = Symbol();
console.log(typeof s); // "symbol"

//2.  Symbol 函数前不能使用 new 命令，否则会报错。这是因为生成的 Symbol 
//是一个原始类型的值，不是对象。

//3. instanceof 的结果为false
console.log('3--------->')
var s3 = Symbol('foo');
console.log(s3 instanceof Symbol); //false

/**
 * 4. Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，
 * 主要是为了在控制台显示，或者转为字符串时，比较容易区分。
 */
console.log('4--------->')
var s4 = Symbol('foo');
console.log('s4', s4);

/**
 * 5. 如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，
 * 将其转为字符串，然后才生成一个 Symbol 值。
 */
console.log('5--------->')
const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
console.log(sym); // Symbol(abc)

/**
 * 6. Symbol 函数的参数只是表示对当前 Symbol 值的描述，相同参数的 Symbol 函数
 * 的返回值是不相等的。
 */
console.log('6--------->')
// 没有参数的情况
var s6_1 = Symbol();
var s6_2 = Symbol();
console.log(s6_1 === s6_2); //false

//有参数的情况
var s6_3 = Symbol('foo');
var s6_4 = Symbol('foo');
console.log(s6_3 === s6_4);

//7. Symbol 值不能与其他类型的值进行运算，会报错。
console.log('7--------->')
var sym7 = Symbol('My symbol');
console.log("your symbol is ", sym7);

//8. Symbol 值可以显式转为字符串
console.log('8--------->')
var sym8 = Symbol("My symbol");
console.log(String(sym8)); // 'Symbol(My symbol)'
console.log(sym8.toString()); // 'Symbol(My symbol)'

//9. Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性。
console.log('9--------->')
var mySymbol = Symbol();
// 第一种写法
var a1 = {};
a1[mySymbol] = 'Hello!';

// 第二种写法
var a2 = {
    [mySymbol]: 'Hello!'
}

//第三种写法
var a3 = {};
Object.defineProperty(a3, mySymbol, {value: 'Hello!'});

//以上写法都得到同样的结果
console.log(a1[mySymbol]); //"Hello!"

/**
 * 10. Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，
 * 也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。
 * 但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。
 */
console.log('10--------->')
var obj10 = {};
var a10 = Symbol('a10');
var b10 = Symbol('b10');

obj10[a10] = 'Hello';
obj10[b10] = 'World';

var objectSymbols = Object.getOwnPropertySymbols(obj10);
console.log(objectSymbols);

/**
 * 11. 如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，
 * 然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，
 * 否则就新建并返回一个以该字符串为名称的 Symbol 值。
 */
console.log('11--------->')
var s11 = Symbol.for('foo');
var s11_1 = Symbol.for('foo');
console.log(s11 === s11_1); // true

//12. Symbol.keyFor 方法返回一个已登记的Symbol 类型的key
console.log('12--------->')
var s12_1 = Symbol.for("foo");
console.log(Symbol.keyFor(s12_1)); // "foo"

var s12_2 = Symbol("foo");
console.log(Symbol.keyFor(s12_2));

/**
 * 分析
 看完以上的特性，你觉得哪些特性是可以模拟实现的呢？
 如果我们要模拟实现一个 Symbol 的话，基本的思路就是构建一个 Symbol 函数，
 然后直接返回一个独一无二的值。

 当调用 Symbol 的时候，会采用以下步骤：
 如果使用 new ，就报错
 如果 description 是 undefined，让 descString 为 undefined
 否则 让 descString 为 ToString(description)
 如果报错，就返回
 返回一个新的唯一的 Symbol 值，它的内部属性 [[Description]] 值为 descString
 考虑到还需要定义一个 [[Description]] 属性，如果直接返回一个基本类型的值，
 是无法做到这一点的，所以我们最终还是返回一个对象。
 */

// 最终实现
console.log('final do');
(function () {
    var root = this;

    var generateName = (function () {
        var postfix = 0;
        return function (descString) {
            postfix++;
            return '@@' + descString + '_' + postfix
        }
    })()

    var SymbolPolyfill = function Symbol(description) {
        if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');

        var descString = description === undefined ? undefined : String(description)

        var symbol = Object.create({
            toString: function () {
                return this.__Name__;
            },
            valueOf: function () {
                return this;
            }
        })

        Object.defineProperties(symbol, {
            '__Description__': {
                value: descString,
                writable: false,
                enumerable: false,
                configurable: false
            },
            '__Name__': {
                value: generateName(descString),
                writable: false,
                enumerable: false,
                configurable: false
            }
        });
        return symbol;
    }

    var forMap = {};

    Object.defineProperties(SymbolPolyfill, {
        'for': {
            value: function (description) {
                var descString = description === undefined ? undefined : String(description)
                return forMap[descString] ? forMap[descString] : forMap[descString] = SymbolPolyfill(descString);
            },
            writable: true,
            enumerable: false,
            configurable: true
        },
        'keyFor': {
            value: function (symbol) {
                for (var key in forMap) {
                    if (forMap[key] === symbol) return key;
                }
            },
            writable: true,
            enumerable: false,
            configurable: true
        }
    });
    root.SymbolPolyfill = SymbolPolyfill;

})()




