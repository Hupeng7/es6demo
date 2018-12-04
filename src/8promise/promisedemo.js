"use strict";

const request = require('request');
const fs = require('fs');
const path = require('path');
/*
Promise
Promise 使得以上绝大部分的问题都得到了解决。

1. 嵌套问题
举个例子：
 */
// request(url, function (err, res, body) {
//     if (err) handleError(err);
//     fs.writeFile('1.txt', body, function (err) {
//         request(url2, function (err, res, body) {
//             if (err) handleError(err);
//         })
//     })
// });
//
// function handleError(err) {
//     throw new TypeError('error--->' + err);
// }
//
// //使用Promise 后
// request(url)
//     .then(function (result) {
//         return writeFileAsynv('1.txt', result);
//     })
//     .then(function (result) {
//         return request(url2)
//     })
//     .catch(function (e) {
//         handleError(e)
//     })

//而对于读取最大文件的那个例子，我们使用 promise 可以简化为：
var readDir = function (dir) {
    return new Promise(function (resolve, reject) {
        fs.readdir(dir, function (err, files) {
            if (err) reject(err);
            resolve(files);
        })
    })
}

var stat = function (path) {
    return new Promise(function (resolve, reject) {
        fs.stat(path, function (err, stat) {
            if (err) reject(err);
            resolve(stat)
        })
    })
}

function findLargest(dir) {
    return readDir(dir)
        .then(function (files) {
            let promises = files.map(file => stat(path.join(dir, file)))
            return Promise.all(promises).then(function (stats) {
                return {stats, files}
            })
        })
        .then(data => {
            let largest = data.stats
                .filter(function (stat) {
                    return stat.isFile()
                })
                .reduce((prev, next) => {
                    if (prev.size > next.size) return prev;
                    return next;
                })
            return data.files[data.stats.indexOf(largest)]
        })
}




















