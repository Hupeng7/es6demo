"use strict";
var http = require('http');
var schedule = require("node-schedule");
var request = require("request");
var moment = require('moment');

function httpGet(time) {
    var uri = `http://www.baidu.com`;
    let flag = 22;
    http.get(uri, function (res) {
        console.log('res status--->', res.statusCode);
        flag = true;
    }).on('error', function (e) {
        console.log('res error--->', e.message);
        flag = false;
    })
    return flag;
}


var date = new Date(2019, 10, 8, 17, 18, 50);

let date_list1 = [
    // new Date(2019, 10, 8, 17, 18, 50),
    // new Date(2019, 10, 8, 19, 7, 10),
    // new Date(2019, 10, 8, 19, 7, 20),
    // new Date(2019, 10, 8, 19, 's', 30),
    new Date(2019, 10, 11, 14, 29, 10),
    new Date(1570775040000),
    new Date('2019-11-11 14:32:10')
];

let date_list = [];
for (let i = 0, len = 100; i < len; i++) {
    date_list.push(new Date('2019-11-11 14:51:10'));
}
for (let i = 0, len = date_list.length; i < len; i++) {
    let date = date_list[i];
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(i, '------ pre params is--->', date, '---time', time);
    var j = schedule.scheduleJob(date, function (time) {
        console.log(i, '------params is--->', date, '---time---', time);
        let re = httpGet(time);
        console.log('re--->', re);
    });
    // console.log('j--->', j);
    // if (j) {
    //     j.cancel();
    // }

}

