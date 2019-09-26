"use strict";
const moment = require('moment');
// setTimeout()

let myGreeting = setTimeout(function sayHi() {
    console.log('time is--->', moment().format('YYYY-MM-DD HH:mm:ss'));
}, 2000)

function sayHi() {
    console.log('Hello everyone, ', moment().format('YYYY-MM-DD HH:mm:ss'));
}

let myGreeting1 = setTimeout(sayHi, 2000);
clearTimeout(myGreeting1);