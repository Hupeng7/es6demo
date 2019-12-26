"use strict";

var a = 1;
var b = 2;
var c = a + b;
console.log('a--->', a);
console.log('b--->', b);
console.log('c--->', c);

function sum(a) {
    var result = 0;
    for (let i = 1; i < 10; i++) {
        result = result + i;
    }
    return result;
}
let result = sum(100);
console.log(result);