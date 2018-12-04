"use strict";
// 一段标准的for 循环代码
console.log('标准的 for 循环--->');
var colors = ["red", "green", "blue"];

for (var i = 0, len = colors.length; i < len; i++) {
    console.log(colors[i]);
}

/**
 * 看着很简单，但是再回顾这段代码，实际上我们仅仅是需要数组中元素的值，但是却需要提前获取数组长度，
 * 声明索引变量等，尤其当多个循环嵌套的时候，更需要使用多个索引变量，
 * 代码的复杂度就会大大增加，比如我们使用双重循环进行去重
 */
console.log('双重循环去重--->');

function unique(array) {
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(array[i]);
        }
    }
    return res;
}

var arrayA = ["1", "12", "2", "12", "4"];
console.log('unique array is: ', unique(arrayA));

/*
为了消除这种复杂度以及减少循环中的错误(比如错误使用其他循环中的变量)，
ES6 提供了迭代器和 for of 循环共同解决这个问题。
迭代器
所谓迭代器，其实就是一个具有 next() 方法的对象，每次调用 next() 都会返回一个结果对象，
该结果对象有两个属性，value 表示当前的值，done 表示遍历是否结束。


 */
console.log('我们直接用 ES5 的语法创建一个迭代器：');

function createIterator(items) {
    var i = 0;
    return {
        next: function () {
            var done = i >= items.length;
            var value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            };
        }
    };
}

// iterator 就是一个迭代器对象
var iteratorEs5 = createIterator([1, 2, 3]);
console.log(iteratorEs5.next()); // {done: false,value: 1}
console.log(iteratorEs5.next()); // {done: false,value: 2}
console.log(iteratorEs5.next()); // {done: false,value: 3}
console.log(iteratorEs5.next()); // {done: true,value: undefined}

/*
for of
除了迭代器之外，我们还需要一个可以遍历迭代器对象的方式，ES6 提供了 for of 语句，
我们直接用 for of 遍历一下我们上节生成的遍历器对象试试：
 */
console.log('es6 for of');
// var iteratorEs6 = createIterator([1, 2, 3]);  //结果报错 TypeError: iterator is not iterable，表明我们生成的 iterator 对象并不是 iterable(可遍历的)。
var iteratorEs6 = [1, 2, 3];
for (let value of iteratorEs6) {
    console.log('value--->', value);
}

/**
 * 那什么才是可遍历的呢？
 其实一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。
 ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性，或者说，一个数据结构只要具有 Symbol.iterator 属性，就可以认为是"可遍历的"（iterable）。
 举个例子：
 const obj = {
    value: 1
};

 for (value of obj) {
    console.log(value);
}

 // TypeError: iterator is not iterable
 */
console.log("我们直接 for of 遍历一个对象，会报错，然而如果我们给该对象添加 Symbol.iterator 属性：")
const obj = {
    value: 1
};

obj[Symbol.iterator] = function () {
    return createIterator([1, 2, 3]);
}
//由此，我们也可以发现 for of 遍历的其实是对象的 Symbol.iterator 属性。
for (let value of obj) {
    console.log(value);
}

// 默认可遍历对象
console.log('遍历数组--->')
const colors1 = ["red", "green", "blue"];
for (let color of colors1) {
    console.log('color is: ', color);
}

/*
尽管我们没有手动添加 Symbol.iterator 属性，还是可以遍历成功，这是因为 ES6 默认部署了 Symbol.iterator 属性，当然我们也可以手动修改这个属性：
var colors = ["red", "green", "blue"];

colors[Symbol.iterator] = function() {
    return createIterator([1, 2, 3]);
};

for (let color of colors) {
    console.log(color);
}

// 1
// 2
// 3
除了数组之外，还有一些数据结构默认部署了 Symbol.iterator 属性。
所以 for...of 循环可以使用的范围包括：
数组
Set
Map
类数组对象，如 arguments 对象、DOM NodeList 对象
Generator 对象
字符串
模拟实现 for of
其实模拟实现 for of 也比较简单，基本就是通过 Symbol.iterator 属性获取迭代器对象，然后使用 while 遍历一下：
 */
function forOf(obj, cb) {
    let iterable, result;

    if (typeof obj[Symbol.iterator] !== "function") {
        throw new TypeError(result + "is not iterable");
    }
    if (typeof cb !== "function") {
        throw new TypeError("cb must be callable");
    }
    iterable = obj[Symbol.iterator]();

    result = iterable.next();
    while (!result.done) {
        cb(result.value);
        result = iterable.next();
    }
}

/*
内建迭代器
为了更好的访问对象中的内容，比如有的时候我们仅需要数组中的值，
但有的时候不仅需要使用值还需要使用索引，ES6 为数组、Map、Set 集合内建了以下三种迭代器：
entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值。
keys() 返回一个遍历器对象，用来遍历所有的键名。
values() 返回一个遍历器对象，用来遍历所有的键值。
以数组为例：
 */
console.log("内建迭代器，数组--->")
var colors2 = ["red", "green", "blue"];

for (let index of colors2.keys()) {
    console.log('index is :', index);
}
for (let color of colors2.values()) {
    console.log('value is :', color);
}

for (let item of colors2.entries()) {
    console.log(item);
}

console.log('Map类型与数组类似 但是相对于Set类型需要注意：');
var colors3 = new Set(["red", "green", "blue"]);
for (let index of colors3.keys()) {
    console.log('index is: ', index);
}
for (let color of colors3.values()) {
    console.log('value is: ', color);
}

for (let item of colors3.entries()) {
    console.log(item);
}

console.log('Map--->');
const valuesMap = new Map([["key1", "value1"], ["key2", "value2"]]);
for (let value of valuesMap) {
    console.log(value);
}

// Babel 是如何编译for of 的
/*
我们可以在 Babel 的 Try it out 中查看编译的结果：
const colors = new Set(["red", "green", "blue"]);

for (let color of colors) {
    console.log(color);
}
对于这样一段代码，编译的结果如下：
"use strict";

var colors = new Set(["red", "green", "blue"]);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (
        var _iterator = colors[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
    ) {
        var color = _step.value;

        console.log(color);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
至少由编译的结果可以看出，使用 for of 循环的背后，还是会使用 Symbol.iterator 接口。

引用阮一峰老师的 ECMAScript 6 入门:
遍历器对象除了具有 next 方法，还可以具有 return 方法和 throw 方法。如果你自己写遍历器对象生成函数，
那么 next 方法是必须部署的，return 方法和 throw 方法是否部署是可选的。
return 方法的使用场合是，如果 for...of 循环提前退出（通常是因为出错，或者有 break 语句或 continue 语句），
就会调用 return 方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署 return 方法。
 */
console.log('迭代器 es6--->');

function createIteratorNew(items) {
    var i = 0;
    return {
        next: function () {
            var done = i >= items.length;
            var velue = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            };
        },
        return: function () {
            console.log("执行了return 方法");
            return {
                value: 23333,
                done: true
            };
        }
    };
}

var colorsNew = ["red", "green", "blue"];
var iteratorNew = createIteratorNew([1, 2, 3]);
colorsNew[Symbol.iterator] = function () {
    return iteratorNew;
}

for (let color of colors) {
    if (color == 1) break;
    console.log(color);
}













