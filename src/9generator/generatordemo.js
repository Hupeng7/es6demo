"use strict";

var fetch = require('node-fetch');

function* gen() {
    var url = "https://api.gthub.com/users/github";
    var result = yield fetch(url);
    console.log(result.bio);
}

//多个异步任务

/*
继发与并发
问题：给定一个 URL 数组，如何实现接口的继发和并发？

async 继发实现：
 */

//继发一
async function loadData() {
    var res1 = await fetch(url1);
    var res2 = await fetch(url2);
    var res3 = await fetch(url3);
    return "whew all done";
}

// 继发二
async function loadData2() {
    for (const url of urls) {
        const response = await fetch(url);
        console.log(await response.text);
    }
}

// async 并发实现
// 并发一
async function loadData3() {
    var res = await Promise.all([fatch(url1), fetch(url2), fetch(url3)]);
    return "whew all done";
}

// 并发二
async function loadData4() {
    // 并发读取url
    const textPromise = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });

    //按次序输出
    for (const textPromise of textPromise) {
        console.log(await textPromise);
    }
}

/*
async 错误捕获
尽管我们可以使用 try catch 捕获错误，但是当我们需要捕获多个错误并做不同的处理时，
很快 try catch 就会导致代码杂乱，就比如：
 */
async function asyncTack(cb) {
    try {
        const user = await UserModel.findById(1);
        if (!user) return cb('No user found');
    } catch (e) {
        return cb('Unexpected error occurred');
    }

    try {
        const savedTask = await
            TaskModel({userId: user.id, name: 'Demo Task'});
    } catch (e) {
        return cb('Error occurred while saving task');
    }

    if (user.notificationEnabled) {
        try {
            await NotificationService.sendNotification(user.id, 'Task Created');
        } catch (e) {
            return cb('Error while sending notification');
        }
    }

    if (savedTask.assignedUser.id !== user.id) {
        try {
            await NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you');
        } catch (e) {
            return cb('Error while sending notification');
        }
    }
    cb(null, savedTask);

}



















