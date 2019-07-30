"use strict";

const crypto = require('crypto');

module.exports = {

    // 密码加密
    encrypted(password, saltKey) {
        const cipher = crypto.createCipher('bf', saltKey);
        let newPwd = '';
        newPwd += cipher.update(password, 'utf8', 'hex');
        newPwd += cipher.final('hex');
        return newPwd;
    },

    // 密码解密
    decrypted(password, saltKey) {
        const decipher = crypto.createDecipher('bf', saltKey);
        let oldPwd = '';
        oldPwd += decipher.update(password, 'hex', 'utf-8');
        oldPwd += decipher.final('utf8');
        return oldPwd;
    },

    // 密码对比
    checkPassword(inputPassword, userPassword) {
        let result;
        if (inputPassword === userPassword) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }



}

