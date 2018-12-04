"use strict";

var fs = require('fs');
var path = require('path');

var co = require('co');

var readDir = function (dir) {
    return new Promise(function (resolve, reject) {
        fs.readdir(dir, function (err, files) {
            if (err) reject(err)
            resolve(files)
        })
    })
}

var stat = function (path) {
    return new Promise(function (resolve, reject) {
        fs.stat(path, function (err, stat) {
            if (err) reject(err)
            resolve(stat)
        })
    })
}

function* findLargest(dir) {
    var files = yield readDir(dir);
    var stats = yield files.map(function (file) {
        return stat(path.join(dir, file))
    })

    let largest = stats
        .filter(function (stat) {
            return stat.isFile()
        })
        .reduce((prev, next) => {
            if (prev.size > next.size) return prev;
            return next;
        })
    return files[stats.indexOf(largest)];
}

// use
co(findLargest, './')
    .then(function (filename) {
        console.log('genarator demo largest file was :', filename);
    })
    .catch(function () {
        console.log(error);
    })














