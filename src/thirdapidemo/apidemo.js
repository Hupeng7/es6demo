"use strict";

/**
 * 展开操作符
 * 顾名思义，用于对象或数组之前的展开操作符（...），将一个结构展开为列表
 */

let firstHalf = ['one', 'two'];
let secondHalf = ['three', 'four', ...firstHalf];
console.log('firstHalf--->', firstHalf);
console.log('secondHalf--->', secondHalf);


//  这种写法够优雅，够简洁吧？ 如果不用展开操作符，我们得这么写：
// let firstHalf = [ 'one', 'two'];
// let secondHalf = ['three', 'four'];
// for(var i=0, i <firstHalf.length; i++ ) {
//   secondHalf.push(firstHalf[i]);
// }
// 展开操作符也适用于合并对象的属性：

const hero = {
    name: 'Leo',
    realName: 'Leo Hu'
}
const heroWithSword = {
    ...hero,
    weapon: 'sword'
}

//不用展开操作符的话，需要遍历对象的属性
let keys = Object.keys(hero);
let obj = {};

for (let i = 0, len = keys.length; i < len; i++) {
    obj[keys[i]] = keys[i];
}
console.log('obj--->', obj);


/**
 *  剩余参数
剩余参数将剩余的参数收入数列。 JavaScript 的特性是参数数目很灵活。 
通常会有一个 arguments 变量收集参数。 让我们看一个例子：
 */
function add(first, second, ...remaining) {
    return first + second;
}
console.log(add(1, 2));
console.log(add(1, 2, 3, 4));  // 3

// 上面的一段代码仅仅将 first 和 second 加起来，也就是说，
// 调用 add(1, 2) 和 add(1, 2, 3, 4) 会得到相同的结果。 下面我们修正一下：
function add1(first, second, ...remaining) {
    return first + second + remaining.reduce((acc, curr) => acc + curr, 0);
}
console.log(add1(1, 2));
console.log(add1(1, 2, 3, 4)); // 10








