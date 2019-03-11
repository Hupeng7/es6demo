"use strict";
var http = require('http');
var schedule = require("node-schedule");
var request = require("request");

function httpGet() {
    var uri = `https://www.baidu.com`;
    request.get(uri, function (err, resp, body) {
        console.log('resp  statusCode--->', resp.statusCode);
    });
}


// var date = new Date(2016,6,13,15,50,0);  
// schedule.scheduleJob(date, function(){  
//   httpGet();  
// });  


schedule.scheduleJob('*/3 * * * * * ', function () {
    httpGet();
}); 