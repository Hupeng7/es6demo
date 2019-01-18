"use strict";
var moment = require('moment');

// let max = moment().max(moment().add(1, 'months'));
// console.log('max--->', max);

let now = moment();
console.log('now--->', now);

let nowFormat = moment().format('YYYY-MM-DD HH:mm:ss');
console.log('nowFormat--->', nowFormat);

let AddOneMonth = moment('2019-01-15 12:30:56').add(1, 'months').format('YYYY-MM-DD HH:mm:ss');
console.log('addOneMonth--->', AddOneMonth);

let AddSevenDays = moment('2019-01-15 12:30:56').add(7, 'days').format('YYYY-MM-DD HH:mm:ss');
console.log('AddSevenDays--->', AddSevenDays);

// let max = moment().max(moment().add(1, 'd'));
// console.log('max--->', max);

const endDate = moment().month(moment().month() + 1).endOf('month').valueOf();
const endDate1 = moment().month(moment().month() + 1).endOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('endDate--->', endDate);
console.log('endDate1--->', endDate1);

const endDate2 = moment().month(moment('2019-05-15 12:30:56').month() + 1).endOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('endDate2--->', endDate2);

const endDate3 = moment().month(moment('2019-05-15 12:30:56').month() + 3).endOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('endDate3--->', endDate3);

