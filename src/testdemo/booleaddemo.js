"use strict";

let a = 10;
let b = 20;
for (let i = 0; i < 5; i++) {
    if (a >= (b - 10)) {
        console.log('hit true', a, (b - 10), (a >= (b - 10)));
    } else {
        console.log('hit false');
    }
}
