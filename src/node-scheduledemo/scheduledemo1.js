"use strict";
var http = require('http');
var schedule = require("node-schedule");
var request = require("request");
var moment = require('moment');

function httpGet() {
    var uri = `https://www.baidu.com`;
    request.get(uri, function (err, resp, body) {
        let time = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log('time--->', time, 'resp  statusCode-- ->', resp.statusCode);
    });
}


// var date = new Date(2016,6,13,15,50,0);  
// schedule.scheduleJob(date, function(){  
//   httpGet();  
// });  

const cron_str1 = '*/3 * * * * *';
const cron_str2 = '0 */1 * * * * ';
const cron_str = '0 0/30 * * * ?';
schedule.scheduleJob(cron_str, function () {
    // httpGet();
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log('time--->', time, );
}); 


const cron_str_two = '0 0/30 * * * *';
schedule.scheduleJob(cron_str_two, function () {
    // httpGet();
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log('time 2222--->', time, );
}); 

const cron_str_three = '0 */30 * * * *';
schedule.scheduleJob(cron_str_three, function () {
    // httpGet();
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log('time 333--->', time, );
}); 