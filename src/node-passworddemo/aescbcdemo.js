var crypto = require('crypto');

/**
* 十六进制转换byte型
* @param str
* @returns {Promise}
*/
var Hexstring2Byte = (str) => {
    let pos = 0;
    let len = str.length;
    if (len % 2 != 0) {
        return null;
    }
    len /= 2;
    let hexA = [];
    for (let i = 0; i < len; i++) {
        let s = str.substr(pos, 2);
        let v = parseInt(s, 16);
        hexA.push(v);
        pos += 2;
    }
    return hexA;
}

/**
 * byte型转换十六进制
 * @param b
 * @returns {string}
 * @constructor
 */
var Bytes2HexString = (b) => {
    let hexs = "";
    for (let i = 0; i < b.length; i++) {
        let hex = (b[i]).toString(16);
        if (hex.length === 1) {
            hexs = '0' + hex;
        }
        hexs += hex.toUpperCase();


    }
    return hexs;
}

/**
 * 可用的方案
 */

/**
 * 加密方法
 * @param key 加密key
 * @param iv       向量
 * @param data     需要加密的数据
 * @returns string
 */
var encrypt = function (key, iv, data) {
    var cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    var crypted = cipher.update(data, 'utf8', 'binary');
    crypted += cipher.final('binary');
    crypted = new Buffer(crypted, 'binary').toString('base64');
    return crypted;
};

/**
 * 解密方法
 * @param key      解密的key
 * @param iv       向量
 * @param crypted  密文
 * @returns string
 */
var decrypt = function (key, iv, crypted) {
    crypted = new Buffer(crypted, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    var decoded = decipher.update(crypted, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
};

var key = '48AF25A76625624FF03012A34B021D39';
console.log('加密的key:', key.toString('hex'));
var iv = 'bairongysf123456';
console.log('加密的iv:', iv);
var data = "15227992049";
console.log("需要加密的数据:", data);
var crypted = encrypt(key, iv, data);
console.log("数据加密后:", crypted);
var dec = decrypt(key, iv, crypted);
console.log("数据解密后:", dec);

/*加密*/
const cipher2 = crypto.createCipheriv('aes-256-cbc', key, 'bairongysf123456');
var cipherResult2 = cipher2.update(data, 'utf8', 'hex');
cipherResult2 += cipher2.final('hex').toLocaleUpperCase();//返回hex编码的字符串
console.log('aes加密2: ', cipherResult2);
console.log('aes加密2: ', cipherResult2.toLocaleUpperCase());

/*解密*/
let cryptedRes = '9DB201391941469CA95B80DB386AEF5E804B52C67A037E8D3DFE5141450AB0F7';
var decipher2 = crypto.createDecipheriv('aes-256-cbc', '48AF25A76625624FF03012A34B021D39', 'bairongysf123456');
var decrypted2 = decipher2.update(cryptedRes, 'hex', 'utf8');
decrypted2 += decipher2.final('utf8');
console.log('aes解密2: ', decrypted2);

let crypted1 = new Buffer(cipherResult2, 'binary').toString('base64');
console.log('加密', crypted1);

//数据加密: 3eee2502f5f21ad0f733459ce0b20c75

//正确密文：4E3BF666926F8B2E7639AF1D775F9C0F
let keySpec = Hexstring2Byte(key);
console.log('keySpec: ', keySpec);
let a1 = Bytes2HexString([160, 100]);
console.log('a1: ', a1);
let a2 = Hexstring2Byte("A064");
console.log('a2: ', a2);
console.log(typeof a2);
let arr = Object.values(keySpec);
console.log('arr: ', arr);
console.log(typeof arr);

