"use strict";

const axios = require("axios");

/**
 * 具体参见官网：http://www.axios-js.com/zh-cn/
 */
const result = axios.get('http://www.baidu.com')
    // .then(function (response) {
    //     console.log('status--->', response.status);
    //     //console.log('data--->', response.data);
    // })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log('Error:', error);
    })

console.log('result---', result);