"use strict";

var moment = require('moment');

function GetNumberOfDays(date_start, date_end) {//获得天数
    if (!date_start) {
        date_start = new Date();
    }
    if (!date_end) {
        date_end = new Date();
    }
    //date_start：开始日期，date_end结束日期
    var start = Date.parse(new Date(date_start));
    var end = Date.parse(new Date(date_end));
    var days = parseInt((end - start) / (1000 * 60 * 60 * 24));//核心：时间戳相减，然后除以天数
    return days;
};

let num = GetNumberOfDays(null, '2019-09-12 00:00:00');
console.log('num---', num);


console.log('date ---', moment().format('YYYY-MM-DD'));
console.log('time ---', moment().format('HH:mm:ss'));