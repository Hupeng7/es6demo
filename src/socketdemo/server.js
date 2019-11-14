"use strict";

var express = require('express');
var app = express();
var http = require('http').Server(app); // 将express注册倒http中
var io = require('socket.io')(http);
var fs = require('fs');

app.get('/', function (req, response) {
    response.sendFile(__dirname + "/index.html");

    var last_msg;
    io.on('connection', socket => {
        socket.on("join", name => {
            console.log('clint name is--->', name);
        })
    })
    // io.on("join", function (msg) {
    //     console.log('name--->', name);
    // })

    setInterval(function () {
        fs.readFile('log.txt', function (err, data) {
            console.log('data--->' + data.toString());
            var mytime = new Date().toLocaleTimeString();
            let new_msg = data.toString();
            if (new_msg) {
                console.log('outer success' + mytime);
                // console.log(new_msg);
                if (last_msg != new_msg) {
                    // 将新消息广播出去
                    io.emit("message", mytime + ":" + new_msg);
                    last_msg = data.toString();
                }
            }
        })
    }, 5000);
});

http.listen(8090, function () {
    console.log('listening on *:8090');
    return;
})


