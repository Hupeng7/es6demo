"use strict";

var fs = require('fs');
var archiver = require('archiver');

var path = 'D:\\projects\\node\\es6demo\\src\\zlibdemo\\file';
var dirList = fs.readdirSync(path);
var status = true;
dirList.forEach(function (item) {

    console.log(item);
    // create a file to stream archive data to.
    var output = fs.createWriteStream('D:\\projects\\node\\es6demo\\src\\zlibdemo\\' + item + '.zip');
    var archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });

    // listen for all archive data to be written
    output.on('close', function () {
        console.log(archive.pointer() / 1024 / 1024 + 'M');
        console.log('压缩完成');
    });

    // good practice to catch this error explicitly
    archive.on('error', function (err) {
        status = false;
        throw err;
    });

    // pipe archive data to the file

    archive.pipe(output);

    archive.directory(item + '/');
    archive.finalize();

});