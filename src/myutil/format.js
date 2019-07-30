"use strict";

const moment = require('moment');

/**
 * 格式化
 */
module.exports = {
    /**
     * 格式化时间
     * '2019-07-10 12:00:00' 
     */
    formatDate(date) {
        let result;
        if (!date) {
            result = ''
        } else {
            result = moment(date).format('YYYY-MM-DD HH:mm:ss');
        }
        return result;
    },

}