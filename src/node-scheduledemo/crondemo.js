"use strict";
var cron = require('cron'); 
var CronJob = cron.CronJob;

new CronJob('* * * * * *',function(){
    console.log('schedule cron : ',new Date());
},null,true)