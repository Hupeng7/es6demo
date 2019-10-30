"use strict";

var moment = require('moment');
var _ = require('lodash');

function GetNumberOfDays(date_start, date_end) {//获得天数
    if (!date_start) {
        // date_start = new Date();
        date_start = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
    }
    if (!date_end) {
        date_end = new Date();
    }
    //date_start：开始日期，date_end结束日期
    console.log('date_start---', date_start);
    var start = Date.parse(new Date(date_start));
    var end = Date.parse(new Date(date_end));
    console.log('s date_start ', date_start, 'date_end', date_end);
    console.log('s time ', start, 'end time', end);
    var days = parseInt((end - start) / (1000 * 60 * 60 * 24));//核心：时间戳相减，然后除以天数
    //var days = (end - start) / (1000 * 60 * 60 * 24);//核心：时间戳相减，然后除以天数
    return days;
};

let num = GetNumberOfDays(null, '2019-10-1 00:00:00');
console.log('num---', num);


function GetNumberOfDays1(date_start, date_end) {//获得天数
    if (!date_start) {
        date_start = new Date();
    }
    if (!date_end) {
        date_end = new Date();
    }
    let sDate1 = Date.parse(date_start);
    let sDate2 = Date.parse(date_end);
    let dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    let iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
};

let num1 = GetNumberOfDays1(null, '2019-10-11');
console.log('num1---', num1);

console.log('date ---', moment().format('YYYY-MM-DD'));
console.log('time ---', moment().format('HH:mm:ss'));


const tStart = moment(moment('2019-09-20 12:30:00').day(moment().day() + 1).startOf('day').format('YYYY-MM-DD HH:mm:ss')).millisecond(0).toDate();
console.log('tStart---', tStart);


var t20 = moment('2019-09-20 12:30:00').add(1, 'days').format('YYYY-MM-DD');
console.log('t20---', t20);

const a = _.find([{ 'id': 1, 'name': 'aaa' }, { 'id': 2, 'name': 'bbb' }], function (o) { return o.id == 3 });
console.log('a---', a);