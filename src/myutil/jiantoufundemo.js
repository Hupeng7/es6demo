"use strict";

/**
 * 箭头函数 属于匿名函数的一类，有四种语法

一、单一参数的单行箭头函数
     const fn = foo => `哈哈，我是${foo}`;
    fn('测试');  //‘哈哈，我是测试’
    其中 fn是函数名， foo是传的参数  => 之后的内容是函数返回的内容
     该函数相当于
     var fn = function(foo){
        return "哈哈，我是" + foo; 
    } 
     注意：其中 ${foo} 中包围foo的是大括号，还有这种省去字符串拼接，直接将变量用 ${} 括起来的时候的 最外边的 ·· 是ESC按键下边的那个斜点，而不是enter键左边的点
           let arr22 = ['s','wsa','e','re']; 
          arr22 = arr22.filter(item => item.length >=2)   //["wsa", "re"]
       若要使用单行箭头函数直接返回一个对象字面量，请使用一个括号包裹改对象字面量，而不是直接使用大括号，否则ES6解析引擎会将其解析为一个多行箭头函数
       const ids = [1, 2, 3];
       const users = ids.map((id,index) => ({index:index, content: id})) 
       console.log(users)  //[{index: 0,content:1},{index: 1,content:2},{index: 2,content:3}]
 */
const fn = foo => `哈哈，我是${foo}`;
console.log('箭头函数一--->', fn('test'));

/**
 * 二、多参数的单行箭头函数
       const fn = (foo, bar) => foo + bar
       foo 与 bar 为所传的参数
          var as = ['2','3','1','6','4'];
         as.sort((a,b) => a-b>0)  //["1", "2", "3", "4", "6"]
 */

const fn1 = (foo, bar) => foo + bar;
console.log('箭头函数二--->', fn1(1, 2));

const as = ['2', '3', '1', '6', '4'];
const as1 = as.sort((a, b) => a - b > 0);
console.log('箭头函数排序后--->', as1);

/**
 * 三、多行箭头函数
       1、单一参数情况下  （与单行箭头函数的区别就是给函数体增加一个{}）
             const fn = foo =>{
               if(typeof foo == 'number'){
                    return foo += 12;
               }else{ 
                 return   foo = foo + '测试单一参数的多行箭头函数';
              }
           }
           fn(7);//19
      2、多个参数的情况下
           const fn = (foo,bar) =>{
               if(typeof foo == 'number' && typeof bar == 'number'){
                    return foo += bar;
               }else{ 
                 return   foo = bar + '测试单一参数的多行箭头函数';
              }
           }
           fn(7,8); //15
 */

const fn2 = foo => {
    if (typeof foo == 'number') {
        return foo += 12;
    } else {
        return foo = foo + '测试单一参数的多行箭头函数';
    }
}
console.log('fn2 单一函数--->', fn2(3));
console.log('fn2 单一函数--->', fn2('3'));

const fn3 = (foo, bar) => {
    if (typeof foo == 'number' && typeof bar == 'number') {
        return foo += bar;
    } else {
        return foo = bar + "测试多个参数的箭头函数";
    }
}
console.log('fn3 多个参数', fn3(2, 5));
console.log('fn3 多个参数', fn3('2', 5));

/**
 * 四、无参数箭头函数 
         如果一个箭头函数无参数传入，则需要一对空的括号来表示空的参数列表
        const greet = () => 'hello ES6';
 */

const greet = () => 'Hello ES6';
console.log('greet--->', greet());