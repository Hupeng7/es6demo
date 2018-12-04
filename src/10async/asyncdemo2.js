"use strict";

var fs = require('fs');
var path = require('path');

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
            resolve(stat);
        })
    })
}

async function findLargest(dir) {
    var files = await readDir(dir);
    let promises = files.map(file => stat(path.join(dir, file)));
    var stats = await Promise.all(promises);

    let largest = stats
        .filter(function (stat) {
            return stat.isFile();
        })
        .reduce((prev, next) => {
            if (prev.size > next.size) return prev;
            return next;
        })
    return files[stats.indexOf(largest)];
}

//use
findLargest('./')
    .then(function (filename) {
        console.log('async demo largest file was :', filename);
    })
    .catch(function () {
        console.log(error);
    })











