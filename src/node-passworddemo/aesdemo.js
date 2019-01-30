var crypto = require('crypto');
var aesutil = module.exports = {};

/**
 * aes加密
 * @param data 待加密内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
aesutil.encryption = function (data, key, iv) {
    iv = iv || "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var cipher = crypto.createCipheriv('aes-256-ecb', key, iv);
    cipher.setAutoPadding(true);
    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    return cipherChunks.join('');
}

/**
 * aes解密
 * @param data 待解密的内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
aesutil.decryption = function (data, key, iv) {
    if (!data) {
        return "";
    }
    iv = iv || "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
    decipher.setAutoPadding(true);
    cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));
    return cipherChunks.join('');
}


/*加密*/
const cipher = crypto.createCipher('aes-128-ecb', "password");
var cipherResult = cipher.update("yuanwen", 'utf8', 'hex');
cipherResult += cipher.final('hex');//返回hex编码的字符串
console.log('aes加密: ', cipherResult);

/*解密*/
var decipher = crypto.createDecipher('aes-128-ecb', "password");
var decrypted = decipher.update(cipherResult, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('aes解密: ', decrypted);

/*加密*/
const cipher1 = crypto.createCipher('aes-256-ecb', "phonenumber");
var cipherResult1 = cipher1.update("13500000001", 'utf8', 'base64');
cipherResult1 += cipher1.final('base64');//返回hex编码的字符串
console.log('aes加密1: ', cipherResult1);

/*解密*/
var decipher1 = crypto.createDecipher('aes-256-ecb', "phonenumber");
var decrypted1 = decipher1.update(cipherResult1, 'base64', 'utf8');
decrypted1 += decipher1.final('utf8');
console.log('aes解密1: ', decrypted1);

// aes加密:  a2908ce8ed8aeeb41683944455328418
// aes解密:  yuanwen
// aes加密1:  QttT2AF3jxtji0irn0V8IA==
// aes解密1:  13500000001


/*加密*/
const cipher2 = crypto.createCipher('aes-256-cbc', "bairongysf123456");
var cipherResult2 = cipher2.update("15227992049", 'utf8', 'hex');
cipherResult2 += cipher2.final('hex');//返回hex编码的字符串
console.log('aes加密2: ', cipherResult2);

/*解密*/
var decipher2 = crypto.createDecipher('aes-256-cbc', "bairongysf123456");
var decrypted2 = decipher2.update(cipherResult2, 'hex', 'utf8');
decrypted2 += decipher2.final('utf8');
console.log('aes解密2: ', decrypted2);