var crypto = require('crypto');

/**
 * aes加密
 * @param data 待加密内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
var encrypt = function (key, iv, data) {
    iv = iv || "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    cipher.setAutoPadding(true);
    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    return cipherChunks.join('');
}

/**
 * aes解密
 * @param data 待解密内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
var decrypt = function (key, iv, data) {
    if (!data) {
        return "";
    }
    iv = iv || "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(true);
    cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));
    return cipherChunks.join('');
}

var key = '48AF25A76625624FF03012A34B021D39';
console.log('加密的key:', key.toString('hex'));
var iv = 'bairongysf123456';
console.log('加密的iv:', iv);
var data = "15227992049";
console.log("需要加密的数据:", data);
var crypted = encrypt(key, iv, data);
console.log("数据加密后:", crypted);
let crypted1 = '9DB201391941469CA95B80DB386AEF5E804B52C67A037E8D3DFE5141450AB0F7';
var dec = decrypt(key, iv, crypted1);
console.log("数据解密后:", dec);

//数据加密: 3eee2502f5f21ad0f733459ce0b20c75


function aesEncrypt(data, key, iv) {
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}
function aesDecrypt(crypted, key, iv) {
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    return decipher.update(crypted, 'hex', 'utf8') + decipher.final('utf8');
}

let text = "15227992049";
let enc = aesEncrypt(text, key, iv);
console.log('enc: ', enc);
console.log(aesDecrypt(enc, key, iv));


var key1 = '48AF25A76625624FF03012A34B021D39';
console.log('加密的key:', key1.toString('hex'));
var iv1 = 'bairongysf123456';
console.log('加密的iv:', iv);

/**
 * @param data     明文
 * @param secretKey  密钥
 * @returns {*}
 */
var encrypt22 = function (data, key1, iv1) {
    var cipher = crypto.createCipher('aes-256-cbc', key1, iv1);
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
};

/**
 * @param data        密文
 * @param secretKey     密钥
 * @returns {*}
 */
var decrypt22 = function (data, key1, iv1) {
    var cipher = crypto.createDecipher('aes-256-cbc', key1, iv1);
    return cipher.update(data, 'hex', 'utf8') + cipher.final('utf8');
}
let text1 = "15227992049";
let enc1 = encrypt22(text1, key1, iv1);
console.log('enc1: ', enc1);
console.log(decrypt22(enc1, key1, iv1));
