/**
 *1  块级作用域的出现
通过 var 声明的变量存在变量提升的特性：
if (condition) {
    var value = 1;
}
console.log(value);
初学者可能会觉得只有 condition 为 true 的时候，才会创建 value，如果 condition 为 false，结果应该是报错，然而因为变量提升的原因，代码相当于：
var value;
if (condition) {
    value = 1;
}
console.log(value);
如果 condition 为 false，结果会是 undefined。
除此之外，在 for 循环中：
for (var i = 0; i < 10; i++) {
    ...
}
console.log(i); // 10
即便循环已经结束了，我们依然可以访问 i 的值。
为了加强对变量生命周期的控制，ECMAScript 6 引入了块级作用域。
块级作用域存在于：
函数内部
块中(字符 { 和 } 之间的区域)
let 和 const
块级声明用于声明在指定块的作用域之外无法访问的变量。
let 和 const 都是块级声明的一种。
我们来回顾下 let 和 const 的特点：
 */
//1. 不会被提升
// if (false) {
//     let value = 1;
// }
// console.log(value);  //ReferenceError: value is not defined

//2. 重复声明报错
// var value2 = 1;
// let value2 = 2; //

//3. 不绑定全局作用域
// 当在全局作用中使用var 声明的时候 会创建一个新的全局变量作为全局变量对象的属性
// var value3 = 1;
// console.log(winidow.value3);
// // 然而let 和const不会
// let value3_1 = 1;
// console.log(window.value3_1);

/**
 * 再来说一下let 和const的区别
 * const用于声明常量，其值一旦被设定不能再被修改，否则会报错
 * 值得一提的是：const声明不允许修改绑定，但允许修改值。这意味着当用const 声明对象时
 */
const data = {
    value: 1
}
//no problem
data.value = 2;
data.num = 3;
//error
// data = {}; //

//2 临时死区
/**
 * 临时死区(Temporal Dead Zone)，简写为 TDZ。
let 和 const 声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，会导致报错：
console.log(typeof value); // Uncaught ReferenceError: value is not defined
let value = 1;
这是因为 JavaScript 引擎在扫描代码发现变量声明时，要么将它们提升到作用域顶部(遇到 var 声明)，要么将声明放在 TDZ 中(遇到 let 和 const 声明)。访问 TDZ 中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从 TDZ 中移出，然后方可访问。
看似很好理解，不保证你不犯错：
 */
var value2 = "global";
//例子1
(function () {
    console.log(value);

    let value2 = 'local';
}());

//例子2
{
    console.log(value2);
    const value2 = 'local';
}
/**
 * 两个例子中，结果并不会打印 "global"，
 * 而是报错 Uncaught ReferenceError: value is not defined，就是因为 TDZ 的缘故。
 */

//3. 循环中的块级作用域
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 3

for (let i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 0

/**
 * 问题在于，上面讲了 let 不提升，不能重复声明，不能绑定全局作用域等等特性，
 * 可是为什么在这里就能正确打印出 i 值呢？
如果是不重复声明，在循环第二次的时候，又用 let 声明了 i，应该报错呀，
就算因为某种原因，重复声明不报错，一遍一遍迭代，i 的值最终还是应该是 3 呀，
还有人说 for 循环的
设置循环变量的那部分是一个单独的作用域，就比如：
 */
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
//abc
//abc
//abc
for (var i = 0; i < 3; i++) {
    var i = 'abc';
    console.log(i);
}
//abc

/**
 * 循环中的 let 和 const
不过到这里还没有结束，如果我们把 let 改成 const 呢？
var funcs = [];
for (const i = 0; i < 10; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // Uncaught TypeError: Assignment to constant variable.
结果会是报错，因为虽然我们每次都创建了一个新的变量，然而我们却在迭代中尝试修改 const 的值，所以最终会报错。
说完了普通的 for 循环，我们还有 for in 循环呢~
那下面的结果是什么呢？
var funcs = [], object = {a: 1, b: 1, c: 1};
for (var key in object) {
    funcs.push(function(){
        console.log(key)
    });
}

funcs[0]()
结果是 'c';
那如果把 var 改成 let 或者 const 呢？
使用 let，结果自然会是 'a'，const 呢？ 报错还是 'a'?
结果是正确打印 'a'，这是因为在 for in 循环中，每次迭代不会修改已有的绑定，而是会创建一个新的绑定。
 */


/**
 * 最佳实践
在我们开发的时候，可能认为应该默认使用 let 而不是 var ，这种情况下，对于需要写保护的变量要使用 const。
然而另一种做法日益普及：默认使用 const，只有当确实需要改变变量的值的时候才使用 let。
这是因为大部分的变量的值在初始化后不应再改变，而预料之外的变量之的改变是很多 bug 的源头。
 */