"use strict";

var schedule = require('node-schedule');

// const scheduleCronstyle = () => {
//     //每秒定时执行一次
//     schedule.scheduleJob('* * * * * *', () => {
//         console.log('scheduleCronstyle: ' + new Date());
//     });
// }

function scheduleCancel() {

    var counter = 1;
    const j = schedule.scheduleJob('* 38 18 * * *', function () {

        console.log('定时器触发次数：' + counter + ' scheduleCronstyle: ' + new Date());
        counter++;

    });

    setTimeout(function () {
        console.log('定时器取消')
        // 定时器取消
        j.cancel();
    }, 150000);

}


// scheduleCronstyle();
scheduleCancel();