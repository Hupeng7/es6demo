"use strict";

/**
 * 概述
在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。

class 的本质是 function。

它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。

基础用法
类定义
类表达式可以为匿名或命名。
 */

// 匿名类
let Example = class {
    constructor(a) {
        this.a = a;
    }
}

// 命名类
let Example1 = class Example1 {
    constructor(a) {
        this.a = a;
    }
}

// 类声明
class Example2 {
    constructor(a) {
        this.a = a;
    }
}
// 注意要点： 不可重复声明
// 注意要点  类定义不会被提升，这意味着，必须在访问前对类进行定义，否则就会报错。类中方法不需要function 关键字。
// 方法间不能加分号
//new Example3();
class Example4 { }

/**
 * 类的主体
属性
prototype
ES6 中，prototype 仍旧存在，虽然可以直接自类中定义方法，
但是其实方法还是定义在 prototype 上的。 覆盖方法 / 初始化时添加方法
 */
// Example.prototype = { // methods
// }
// 添加方法
Object.assign(Example.prototype, {
    // methods
})

/**
 * 静态属性
静态属性：class 本身的属性，即直接定义在类内部的属性（ Class.propname ），
不需要实例化。 ES6 中规定，Class 内部只有静态方法，没有静态属性。
 */

class Example5 {
    // 新提案
    // static a = 2;
}
// 目前可行写法
Example5.b = 2;
// 公共属性
class Example6 { }
Example6.prototype.a = 2;

// 实例属性： 定义在实例对象 this 上的属性
class Example7 {
    // a = 2;
    constructor() {
        console.log(this.a);
    }
}
// name 属性 返回跟在class后的类名（存在时）
let Example8 = class Exam {
    constructor(a) {
        this.a = a;
    }
}
console.log(Example8.name); // Exam

let Example9 = class {
    constructor(a) {
        this.a = a;
    }
}
console.log(Example9.name); // Example9

/**
 * 方法
constructor 方法
constructor 方法是类的默认方法，创建类的实例化对象时被调用。
 */

class Test {
    constructor() {
        // 默认返回实例对象 this
    }
}
console.log(new Test() instanceof Test); // true

class Example10 {
    constructor() {
        // 指定返回对象
        return new Test();
    }
}
console.log(new Example10() instanceof Example10); // false
console.log(new Example10() instanceof Test); // true

//静态方法
class Example11 {
    static sum(a, b) {
        console.log(a + b);
    }
}
Example11.sum(1, 2);  // 

// 原型方法
class Example12 {
    sum(a, b) {
        console.log(a + b);
    }
}
let exam = new Example12();
exam.sum(1, 2);

// 实例方法
class Example13 {
    constructor() {
        this.sum = (a, b) => {
            console.log(a + b);
        }
    }
}

/**
 * 类的实例化
new
class 的实例化必须通过 new 关键字。
 */
class Example14 { }
// let exam1 = Example();// Class constructor Example cannot be invoked without 'new'

// 实例化对象
class Example15 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log('Example');
    }
    sum() {
        return this.a + this.b;
    }
}
let exam2 = new Example15(2, 1);
console.log(exam2.sum());
let exam3 = new Example15(3, 1);
console.log(exam3.sum());
console.log(exam2._proto_ == exam3._proto_); // true

/**
 * decorator 是一个函数 用来修改类的行为 在代码编译时产生作用
 * 类修饰 一个参数 第一个参数target 指向类本身
 */
function testable(target) {
    target.isTestable = true;
}
// @testable
// class Example17 { }
// Example17.isTestable;

// 方法修饰
// 3个参数 target(类的原型对象) name(修饰的属性名) descriptor(该属性的描述对象)
// class Example18 {
//     @writeable
//     sum(a, b) {
//         return a + b;
//     }
// }
function writeable(target, name, descriptor) {
    descriptor.writeable = false;
    return descriptor;
}

// 封装于继承
// getter /setter
class Example19 {
    constructor(a, b) {
        this.a = a; // !!!  实例化时调用 set方法
        this.b = b;
    }
    get a() {
        console.log('getter');
        return this.a;
    }
    set a(a) {
        console.log('setter');
        this.a = a;  // 自身递归调用 一样的话  则递归调用到内存溢出
    }
}

// let exam4 = new Example19(1, 2); // 不断输出 setter ，最终导致 RangeError

class Example20 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    get a() {
        console.log('getter');
        return this._a;
    }
    set a(a) {
        console.log('setter');
        this._a = a;
    }
}
let exam5 = new Example20(1, 2); // 只输出setter 不会调用getter 方法
console.log(exam5._a);

// getter 不可单独出现
// class Example {
//     constructor(a) {
//         this.a = a; 
//     }
//     get a() {
//         return this.a;
//     }
// }
// let exam = new Example(1); // Uncaught TypeError: Cannot set property // a of #<Example> which has only a getter

//getter 与setter必须同事出现
class Father {
    constructor() { }
    get a() {
        return this._a;
    }
}
class Child extends Father {
    constructor() {
        super();
    }
    set a(a) {
        this._a = a;
    }
}
let test = new Child();
test.a = 2;
console.log(test.a); // undefined

class Father1 {
    constructor() { }
    //或者都放在子类中
    get a() {
        return this._a;
    }
    set a(a) {
        this._a = a;
    }
}

class Child1 extends Father1 {
    constructor() {
        super();
    }
}
let test1 = new Child1();
test1.a = 2;
console.log(test1.a); // 2











