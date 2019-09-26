

const NodeRSA = require('node-rsa');
const fs = require('fs');
const key = new NodeRSA({ b: 512 });

const text1 = 'Hello RSA!';
const text = "RYN2kZpE";
const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);

const a = "LrWnNH1kPkXuTT2rUPRR/TNgHpjkhyVVk/xbewlWSz59DcmyhRFDy0DWiVcPJg4pSKdr/jD4D2O8L9IWRwL3S72Yl6PitduzCEQ9BvPMFd9pYxWlJvvd5SmpWR3wgxFr75YHZ2XAJ/jQU+459BRRv8ZhF4cJfTxGdCyxL2bK+SW3KB4sDYWP7dFfDrs0ppMRxQq+UDDBwbij/gK/bv54lXZ4TPCTCDlzwmHeq2R3YuVp1GLAWGFEjaa+7BKHii4FqzVf1MuvIjEf7Y0sUeJYwq1e688nRe2rhX7RgLGlSmGZOTYk5nCZ0rpcBTEltt2uVNR1a66xb7kzi2zOEc4Sog==";

const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);

// let pubkey =
//     "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv/b4djter+PJ8OT7s7+bEl/o1PLLCOjcjca0yy+syC82AxMvxRmTnT2fQdhDx6aQ0VKoiYh4c4DDbKsLA+l65sKruP8Lv6UdMyJiqk5P9tEOT2piHMeXCL9bYPIdXmsXvntLp32vpVC/i209493EtLuNUKKL3cgQMOKT2iSosibvnB0qcfYALaxKiVdhnct5hJLIs0FVo7TE7FDrENuntr5D+8UqtrCpeI8JvmiRUy/HV8cbhymed+i4p7p//G+k6szDW73C/EZyG+5JJphl2siy7yIHxISZdt5iVKc9FTftKpprJzhKCHJvpQEfweM837JqJNMVK21Ygv6wHxdRwIDAQAB";


const pubkey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv/b4djter+PJ8OT7s7+bEl/o1PLLCOjcjca0yy+syC82AxMvxRmTnT2fQdhDx6aQ0VKoiYh4c4DDbKsLA+l65sKruP8Lv6UdMyJiqk5P9tEOT2piHMeXCL9bYPIdXmsXvntLp32vpVC/i209493EtLuNUKKL3cgQMOKT2iSosibvnB0qcfYALaxKiVdhnct5hJLIs0FVo7TE7FDrENuntr5D+8UqtrCpeI8JvmiRUy/HV8cbhymed+i4p7p//G+k6szDW73C/EZyG+5JJphl2siy7yIHxISZdt5iVKc9FTftKpprJzhKCHJvpQEfweM837JqJNMVK21Ygv6wHxdRwIDAQAB
-----END PUBLIC KEY-----`
// let data = fs.readFile(pubkey);
// const privateKey = new NodeRSA(data);
// // privateKey.setOptions({encryptionScheme: 'pkcs1'}); // 因为jsencrypt自身使用的是pkcs1加密方案, nodejs需要修改成pkcs1。
// const encrypted222 = privateKey.encryptPrivate(text, 'base64');
// console.log('encrypted222: ', encrypted222);

// decrypted = privateKey.decrypt(baseStr, 'utf8');
// console.log(decrypted);

// function encrypt() {
//  fs.readFile('./pem/public.pem', function (err, data) {
//  var key = new NodeRSA(data);
//  let cipherText = key.encrypt('RYN2kZpE', 'base64');
//  console.log(cipherText);
//  });
// }
// //generator();
// encrypt();


// function generator() {
//  var key = new NodeRSA({ b: 512 })
//  key.setOptions({ encryptionScheme: 'pkcs1' })
//  var privatePem = key.exportKey('pkcs1-private-pem')
//  var publicPem = key.exportKey('pkcs1-public-pem')
//  fs.writeFile('./pem/public.pem', publicPem, (err) => {
//  if (err) throw err
//  console.log('公钥已保存！')
//  })
//  fs.writeFile('./pem/private.pem', privatePem, (err) => {
//  if (err) throw err
//  console.log('私钥已保存！')
//  })
// }
// generator();

const JSEncrypt = require('node-jsencrypt');

let jsencrypt = new JSEncrypt()
let pubkey1 =
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv/b4djter+PJ8OT7s7+bEl/o" +
    "1PLLCOjcjca0yy+syC82AxMvxRmTnT2fQdhDx6aQ0VKoiYh4c4DDbKsLA+l65sKruP8Lv" +
    "6UdMyJiqk5P9tEOT2piHMeXCL9bYPIdXmsXvntLp32vpVC/i209493EtLuNUKKL3cgQMO" +
    "KT2iSosibvnB0qcfYALaxKiVdhnct5hJLIs0FVo7TE7FDrENuntr5D+8UqtrCpeI8JvmiR" +
    "Uy/HV8cbhymed+i4p7p//G+k6szDW73C/EZyG+5JJphl2siy7yIHxISZdt5iVKc9FTftKppr" +
    "+JzhKCHJvpQEfweM837JqJNMVK21Ygv6wHxdRwIDAQAB"
let rsaPassword = jsencrypt.setPublicKey(pubkey1)

let password = jsencrypt.encrypt('RYN2kZpE');
console.log('password---', password);

let de = jsencrypt.decrypt(rsaPassword);
console.log('password---', de);