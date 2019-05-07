"use strict";

/*
1. 基本介绍
ES6 提供了新的数据结构 Set。

它类似于数组，但是成员的值都是唯一的，没有重复的值。

初始化
Set 本身是一个构造函数，用来生成 Set 数据结构。

let set = new Set();
Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
 */
console.log('set init');
let set1 = new Set([1, 2, 3, 4, 4]);
console.log(set1);

// set1 = new Set(document.querySelectorAll('div'));
// console.log(set1.size);

set1 = new Set(new Set([1, 2, 3, 4]));
console.log(set1.size);

/**
 * 2. 属性和方法
 操作方法有：

 add(value)：添加某个值，返回 Set 结构本身。
 delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 has(value)：返回一个布尔值，表示该值是否为 Set 的成员。
 clear()：清除所有成员，无返回值。
 */
console.log('属性和方法--->');
let set2 = new Set();
console.log(set2.add(1).add(2)); // Set [1,2]

console.log(set2.delete(2)); // true
console.log(set2.has(2));    //false

console.log(set2.clear()); //undefined
console.log(set2.has(1)); // false

/*
之所以每个操作都 console 一下，就是为了让大家注意每个操作的返回值。

遍历方法有：

keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员，无返回值
注意 keys()、values()、entries() 返回的是遍历器
 */
console.log('key is--->');
let set2_2 = new Set(['a', 'b', 'c']);
console.log(set2_2.keys()); // SetIterator{"a","b","c"}
console.log([...set2_2.keys()])

console.log('value is--->')
let set2_3 = new Set(['a', 'b', 'c']);
console.log(set2_3.values());
console.log([...set2_3.values()]);

console.log('entries is--->')
let set2_4 = new Set(['a', 'b', 'c']);
console.log(set2_4.entries());
console.log([...set2_4.entries()]);

console.log('forEach is--->')
let set2_5 = new Set([1, 2, 3]);
set2_5.forEach((value, key) => console.log(key + ':' + value));
/*
属性：
Set.prototype.constructor：构造函数，默认就是 Set 函数。
Set.prototype.size：返回 Set 实例的成员总数。
 */

//final version
(function (global) {
    var NaNSymbol = Symbol('NaN');
    var encodeVal = function (value) {
        return value !== value ? NaNSymbol : value;
    }
    var decodeVal = function (value) {
        return (value === NaNSymbol) ? NaN : value;
    }
    var makeIterator = function (array, iterator) {
        var nextIndex = 0;
        // new Set(new Set()) 会调用这里
        var obj = {
            next: function () {
                return nextIndex < array.length ?
                    {value: iterator(array[nextIndex++]), done: false} :
                    {value: void 0, done: true};
            }
        };
        // [...set.key()] 会调用这里
        obj[Symbol.iterator] = function () {
            return obj;
        }
        return obj;
    }

    function forOf(obj, cb) {
        let iterable, result;
        if (typeof obj[Symbol.iterator !== "function"]) throw new TypeError(obj + "is not iterable");
        if (typeof cb !== "function") throw new TypeError('cb must be callable');

        iterable = obj[Symbol.iterator]();
        result = iterable.next();
        while (!result.done) {
            cb(result.value);
            result = iterable.next();
        }
    }

    function Set(data) {
        this._values = [];
        this.size = 0;
        forOf(data, (item) => {
            this.add(item);
        })
    }

    Set.prototype['add'] = function (value) {
        value = encodeVal(value);
        if (this._values.indexOf(value) == -1) {
            this._values.push(value);
            ++this.size;
        }
        return this;
    }

    Set.prototype['has'] = function (value) {
        return (this._values.indexOf(encodeVal(value)) !== -1);
    }

    Set.prototype['delete'] = function (value) {
        var idx = this._values.indexOf(encodeVal(value));
        if (idx == -1) return false;
        this._values.splice(idx, 1);
        --this.size;
        return true;
    }

    Set.prototype['clear'] = function (value) {
        this._values = [];
        this.size = 0;
    }

    Set.prototype['forEach'] = function (callbackFn, thisArg) {
        thisArg = thisArg || global;
        for (var i = 0; i < this._values.length; i++) {
            callbackFn.call(thisArg, this._values[i], this._values[i], this._values[i], this);
        }
    }

    Set.prototype['values'] = Set.prototype['keys'] = function () {
        return makeIterator(this._values, function (value) {
            return decodeVal(value);
        });
    }

    Set.prototype['entries'] = function () {
        return makeIterator(this._values, function (value) {
            return [decodeVal(value), decodeVal(value)];
        });
    }

    Set.prototype[Symbol.iterator] = function () {
        return this.values();
    }

    Set.prototype['forEach'] = function (callbackFn, thisArg) {
        thisArg = thisArg || global;
        var iterator = this.entries();

        forOf(iterator, (item) => {
            callbackFn.call(thisArg, item[1], item[0], this);
        })
    }

    //Set.length = 0;

    global.Set = Set;

})(this)

console.log('set 2_6--->')
let set2_6 = new Set(new Set([1, 2, 3]));
console.log(set2_6.size); //

console.log([...set2_6.keys()]);    //
console.log([...set2_6.values()])   //
console.log([...set2_6.entries()]); //















