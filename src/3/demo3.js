

// ES6增加了箭头函数
let func = value => value;
//相当于 
let func1 = function (value) {
    return value;
}

// 如果需要给函数传入多个参数
let func2 = (value, num) => value * num;
// 如果需要给函数传入多个参数
let func3 = (value, num) => {
    return value * num;
}
// 如果需要直接返回一个对象：
let func4 = (value, num) => ({ total: value * num });
// 与变量结构结合
let func5 = ({ value, num }) => ({ total: value * num })
//使用
var result = func5({
    value: 10,
    num: 10
})
console.log('result is: ', result);

/**
 * 很多时候，你可能想不到要这样用，所以再来举个例子，
 * 比如在 React 与 Immutable 的技术选型中，我们处理一个事件会这样做：
 */
handleEvent = () => {
    this.setState({
        data: this.state.data.set("key", "value");
    })
};
//简化为：
handleEvent1 = () => {
    this.setState(({ data }) => ({
        data: data.set("key", "value")
    }))
};

/**
 * 比较
本篇我们重点比较一下箭头函数与普通函数。
主要区别包括：
1.没有 this
箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值。
这就意味着如果箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this。
模拟一个实际开发中的例子：
我们的需求是点击一个按钮，改变该按钮的背景色。
2. 没有 arguments
箭头函数没有自己的 arguments 对象，这不一定是件坏事，因为箭头函数可以访问外围函数的 
arguments 对象
3. 不能通过 new 关键字调用
JavaScript 函数有两个内部方法：[[Call]] 和 [[Construct]]。
当通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。
当直接调用的时候，执行 [[Call]] 方法，直接执行函数体。
箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错。
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
4. 没有 new.target
因为不能使用 new 调用，所以也没有 new.target 值。
关于 new.target，可以参考 http://es6.ruanyifeng.com/#docs/class#new-target-%E5%B1%9E%E6%80%A7
5. 没有原型
由于不能使用 new 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 prototype 这个属性。
var Foo = () => {};
console.log(Foo.prototype); // undefined
6. 没有 super
连原型都没有，自然也不能通过 super 来访问原型的属性，所以箭头函数也是没有 super 的，不过跟 this、arguments、new.target 一样，
这些值由外围最近一层非箭头函数决定。
总结
最后，关于箭头函数，引用 MDN 的介绍就是：
An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.
翻译过来就是：
箭头函数表达式的语法比函数表达式更短，并且不绑定自己的this，arguments，super或 new.target。这些函数表达式最适合用于非方法函数(non-method functions)，并且它们不能用作构造函数。
那么什么是 non-method functions 呢？
我们先来看看 method 的定义：
A method is a function which is a property of an object.
对象属性中的函数就被称之为 method，那么 non-mehtod 就是指不被用作对象属性中的函数了，可是为什么说箭头函数更适合 non-method 呢？
让我们来看一个例子就明白了：
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b();
// undefined Window
obj.c();
// 10, Object {...}
自执行函数
自执行函数的形式为：
(function(){
    console.log(1)
})()
或者
(function(){
    console.log(1)
}())
利用箭头简化自执行函数的写法：
(() => {
    console.log(1)
})()
但是注意：使用以下这种写法却会报错：
(() => {
    console.log(1)
}())
为什么会报错呢？嘿嘿，如果你知道，可以告诉我~

 */