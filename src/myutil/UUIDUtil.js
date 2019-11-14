"use strict";

const uuid = require('node-uuid');

for (let i = 0, len = 10; i < 10; i++) {
    let id = uuid.v1();
    console.log(i ,'--uuid---',id);
}