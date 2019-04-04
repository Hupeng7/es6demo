"use strict";

var zipper = require("zip-local");

/**
 * 压缩文件夹 zip格式  下载到本地指定位置
 */
var path = 'D:\\projects\\node\\es6demo\\src\\zlibdemo\\file';
zipper.sync.zip(path).compress().save(".//tmp//target.zip");