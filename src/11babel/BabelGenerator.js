"use strict";

/**
 * Babel 编译 Generator
 */
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    yield 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
/*
{ value: 'hello', done: false }
{ value: 'world', done: false }
{ value: 'ending', done: false }
{ value: undefined, done: true }
 */

/**
 * Babel 编译 Async
 */
const fetchData = (data) => new Promise((resolve) => setTimeout(resolve, 1000, data + 1));

const fetchValue = async function () {
    var value1 = await fetchData(1);
    var value2 = await fetchData(value1);
    var value3 = await fetchData(value2);
    console.log('Async function result is :', value3);
};
fetchValue();

/**
 * Babel 编译 Class
 */
//ES6
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return 'hello,I am ' + this.name;
    }

   // static staticFiled = 'static filed';

    static staticHello() {
        return 'hello static method';
    }
}

var kevin = new Person('Kevin');
kevin.sayHello();
Person.staticHello();
//console.log(Person.staticFiled);

//ES5
function PersonEs5(name) {
    this.name = name;
}

PersonEs5.prototype.sayHello = function () {
    return 'hello,I am ' + this.name;
};

var kevines5 = new PersonEs5('Kevin');
kevines5.sayHello();















