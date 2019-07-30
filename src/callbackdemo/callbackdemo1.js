"use strict";

getdata(check)
function getdata(callback) {
    //这里我们假设是从后端获取数据
    setTimeout(function () {
        //假设我们获取到数据info
        var info = {
            "id": 1,
            "name": '张三'
        }
        //得到数据以后执行函数方法
        callback(info)//这个就是回调函数
    }, 1000)
}
function check(data) {
    if (data.id == 2) {
        console.log('验证成功，可以通过')
    } else {
        console.log('fail');
    }
}

