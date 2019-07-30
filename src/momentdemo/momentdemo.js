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
console.log('秒转正常格式', moment(unix * 1000).format('YYYY-MM-DD HH:mm:ss'));
const s = moment().seconds();
console.log('s---', s);
console.log('秒转正常格式111', moment(s * 1000).format('YYYY-MM-DD HH:mm:ss'));

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

//两个时间相减得到天数
function GetNumberOfDays(date1, date2) {//获得天数
    //date1：开始日期，date2结束日期
    var a1 = Date.parse(new Date(date1));
    var a2 = Date.parse(new Date(date2));
    var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24));//核心：时间戳相减，然后除以天数
    return day
};

var a1 = "12-19-2018";
var a2 = "2019/1/7";
var b = GetNumberOfDays(a1, a2)
console.log(b);

//获取年 月 日

console.log('日---', moment().date());
console.log('月---', moment().month());
console.log('年---', moment().year());

// 弃用
// console.log('日---', moment().dates());
// console.log('月---', moment().months());
// console.log('年---', moment().years());



// 获取上周一开始   到上周日结束
const cur_cycle_time_list = [
    { 'end_time': moment().day(moment().day() - 1).endOf('day').format('YYYY-MM-DD HH:mm:ss'), 'start_time': moment().day(moment().day() - 1).startOf('day').format('YYYY-MM-DD HH:mm:ss') },
    { 'end_time': moment().week(moment().week() - 1).endOf('week').format('YYYY-MM-DD HH:mm:ss'), 'start_time': moment().week(moment().week() - 1).startOf('week').format('YYYY-MM-DD HH:mm:ss') },
    { 'end_time': moment().month(moment().month() - 1).endOf('month').format('YYYY-MM-DD HH:mm:ss'), 'start_time': moment().month(moment().month() - 1).startOf('month').format('YYYY-MM-DD HH:mm:ss') }
];
for (let i; i < 3; i++) {
    console.log('end time---', cur_cycle_time_list[i].end_time, 'start time---', cur_cycle_time_list[i].start_time);
}



console.log('end time---', moment().day(moment().day() - 1).endOf('day').format('YYYY-MM-DD HH:mm:ss'), 'start time---', moment().day(moment().day() - 1).startOf('day').format('YYYY-MM-DD HH:mm:ss'));
console.log('end time---', moment().week(moment().week() - 1).endOf('week').format('YYYY-MM-DD HH:mm:ss'), 'start time---', moment().week(moment().week() - 1).startOf('week').format('YYYY-MM-DD HH:mm:ss'));
console.log('end time---', moment().month(moment().month() - 1).endOf('month').format('YYYY-MM-DD HH:mm:ss'), 'start time---', moment().month(moment().month() - 1).startOf('month').format('YYYY-MM-DD HH:mm:ss'));

const startDate11 = moment().week(moment().week() - 1).startOf('week').valueOf();
const endDate11 = moment().week(moment().week() - 1).endOf('week').valueOf();
console.log('startDate11---', new Date(startDate11));
console.log('endDate11---', new Date(endDate11));
console.log('end week 22222---', moment().day(moment(endDate11).day() + 1).format('YYYY-MM-DD HH:mm:ss'));
console.log('start week 2222---', moment().day(moment(startDate11).day() + 1).format('YYYY-MM-DD HH:mm:ss'));


const endsss = moment().week(moment().week() - 1).endOf('week').format('YYYY-MM-DD HH:mm:ss');
const startsss = moment().week(moment().week() - 1).startOf('week').format('YYYY-MM-DD HH:mm:ss');
//end time--- 2019-06-29 23:59:59 start time--- 2019-06-23 00:00:00
console.log('endsss', endsss);
console.log('startsss', startsss);

console.log('start week 333344444---', moment().day(moment(startsss).day() - 6).startOf('day').format('YYYY-MM-DD HH:mm:ss'));
console.log('end week 333344444---', moment().day(moment(endsss).day() - 6).endOf('day').format('YYYY-MM-DD HH:mm:ss'));
// start week 333344444--- 2019-06-24 00:00:00
// end week 333344444--- 2019-06-30 23:59:59


var lastWeek = moment().isoWeek(moment().subtract(1, 'w').week());
var mondayDifference = lastWeek.dayOfYear() - lastWeek.weekday() + 1;
var sundayDifference = mondayDifference - 1;
var lastMonday = moment().dayOfYear(mondayDifference);
var lastSunday = moment().dayOfYear(sundayDifference);
console.log('lastMonday', lastMonday);
console.log('lastSunday', lastSunday);

var d = new Date();
// set to Monday of this week
d.setDate(d.getDate() - (d.getDay() + 6) % 7);
// set to previous Monday
// d.setDate(d.getDate() - 7);
// d.setDate(d.getDate());
// create new date of day before
var last_sunday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
var last_monday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);

console.log('last_sunday---', last_sunday);
console.log('last_monday---', last_monday);


var date = new Date();
console.log(date.getMonth() + 1);

var month = moment('2019-01-30').month() + 1;
console.log(month);

moment().week(); // Number
moment().isoWeek(); // Number
console.log('moment().week()---', moment().week());
console.log('moment().isoWeek()---', moment().isoWeek());

// 上周 开始时间 周一 00:00:00 和结束时间 周日 23:59:59  
const nextWeekendfff = moment().week(moment().week() - 1).endOf('week').add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
console.log('nextWeekendfff--->', nextWeekendfff);
const nextWeekstartfff = moment().week(moment().week() - 1).startOf('week').add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
console.log('nextWeekstartfff--->', nextWeekstartfff);


function getTimeSeconds(d) {
    var ndate = new Date();
    if (d) {
        ndate = d;
    }
    return Math.floor(ndate.getTime() / 1000);
};
const a = getTimeSeconds();
console.log('a---', a);
console.log('秒转正常格式111', moment(a * 1000).format('YYYY-MM-DD HH:mm:ss'));



const stime = moment(1563785265*1000);
console.log('s time---', stime);