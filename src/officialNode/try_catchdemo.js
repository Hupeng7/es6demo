"use strict";

var closeMyFile = function () {
    console.log('already close my file');
}

function doSomething() {
    console.log('do something...');
}

try {
    doSomething();
    let a = 1 / 0;
    console.log('a--->', a);
    // throw new Error('something error');
} catch (e) {
    console.log('error:', e);
} finally {
    closeMyFile();
}

var i = 0;
do {
    i += 1;
    console.log(i)
} while (i < 5);

/**
 * 可以使用label 标签，结合continue/break 控制循环
 */
var num = 0;
outPoint:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outPoint;
        }
        num++;
    }
}
console.log('num--->', num);