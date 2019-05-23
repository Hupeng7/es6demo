"use strict";

const dgram = require('dgram');
const moment = require('moment');

var schedule = require("node-schedule");
const buf1 = Buffer.from('time');
const buf2 = Buffer.from(' is ');


// (function send() {

//     let time = moment().format('YYYY-MM-DD HH:mm:ss');
//     let buf3 = Buffer.from(time + '');
//     client.send([buf1, buf2, buf3], 41234, (err) => {
//         client.close();
//     });
// })()

//  '0 0 2 1 * ?'  每个月1日凌晨2点  '*/3 * * * * *'  '0 0/30 * * * *'
var scheduledTask = schedule.scheduleJob('*/3 * * * * *', async function () {
    const client = dgram.createSocket('udp4');
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    let buf3 = Buffer.from(time + '');
    client.send([buf1, buf2, buf3], 41234, (err) => {
        client.close();
    });
    console.log(' socket client: ', time);
});









