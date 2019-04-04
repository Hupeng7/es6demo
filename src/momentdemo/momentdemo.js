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

const endDate4 = moment('2019-01-15 12:30:56').add(7, 'days').endOf('day').format('YYYY-MM-DD HH:mm:ss');
console.log('endDate4--->', endDate4);
console.log('max day', moment().endOf('day'));

// 下周末
const nextWeekend = moment().week(moment().week() + 1).endOf('week').add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
console.log('nextWeekend--->', nextWeekend);
//nextWeekend---> 2019-02-03 23:59:59

//判断时间是否在之前
let checkDate = moment('2010-10-20').isBefore('2010-10-21'); // true
console.log('checkDate--->', checkDate);

let checkDate1 = moment().isBefore('2010-10-21 12:30:56');
console.log('checkDate1--->', checkDate1);
let checkDate2 = moment().isBefore('2019-01-21 09:30:56');
console.log('checkDate2--->', checkDate2);

//判断时间相同
let isSame = moment('2010-10-20').isSame('2010-10-20'); // true
console.log('isSame--->', isSame);

//下周末
let cur_user_excellent_endtime = moment().week(moment().week() + 1).endOf('week').add(1, 'days').format('YYYY-MM-DD HH:mm:ss');

//季度
const quarterStart = moment().quarter(moment().quarter() - 1).startOf('quarter').format('YYYY-MM-DD HH:mm:ss');
console.log('quarterStart--->', quarterStart);
const quarterEnd = moment().quarter(moment().quarter() - 1).endOf('quarter').format('YYYY-MM-DD HH:mm:ss');
console.log('quarterEnd--->', quarterEnd);

const quarterStart1 = moment().quarter(moment().quarter()).startOf('quarter').format('YYYY-MM-DD HH:mm:ss');
console.log('quarterStart1--->', quarterStart1);
const quarterEnd1 = moment().quarter(moment().quarter()).endOf('quarter').format('YYYY-MM-DD HH:mm:ss');
console.log('quarterEnd1--->', quarterEnd1);

const quarterStart2 = moment().quarter(moment().quarter() + 1).startOf('quarter').format('YYYY-MM-DD HH:mm:ss');
console.log('quarterStart2--->', quarterStart2);
const quarterEnd2 = moment().quarter(moment().quarter() + 1).endOf('quarter').format('YYYY-MM-DD HH:mm:ss');
console.log('quarterEnd2--->', quarterEnd2);

let cur_month_start_time = moment().month(moment().month()).startOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('本月开始时间--->', cur_month_start_time);
//本月开始时间---> 2019-01-01 00:00:00

// 天
const dayStart = moment().day(moment().day() - 1).startOf('day').format('YYYY-MM-DD HH:mm:ss');
console.log('dayStart--->', dayStart);

// Date 类型  前一天 开始和结束
const yesterdayStart = moment(moment().day(moment().day() - 4).startOf('day').format('YYYY-MM-DD HH:mm:ss')).millisecond(0).toDate();
const yesterdayEnd = moment(moment().day(moment().day() - 1).endOf('day').format('YYYY-MM-DD HH:mm:ss')).millisecond(0).toDate();

//unix 时间戳(秒)
var unix = moment().unix();
console.log('unix--->', unix);
//unix---> 1548647047
const unix1 = moment(1318874398806).unix();
console.log('unix1--->', unix1);
//unix1---> 1318874398

//unix偏移量(毫秒)
var unix2 = moment().valueOf();
var unix3 = +moment();
console.log('unix2--->', unix2);
console.log('unix3--->', unix3);
// unix2---> 1548647358934
// unix3---> 1548647358934
var unix4 = moment(1318874398806).valueOf();
var unix5 = +moment(1318874398806);
console.log('unix4--->', unix4);
console.log('unix5--->', unix5);
// unix4---> 1318874398806
// unix5---> 1318874398806

//毫秒
var ms1 = moment().millisecond();
var ms2 = moment().milliseconds();
console.log('ms1--->', ms1);
console.log('ms2--->', ms2);
// ms1---> 762
// ms2---> 762

let nowFormat1 = moment().format('YYYYMMDD');
console.log('nowFormat1--->', nowFormat1);