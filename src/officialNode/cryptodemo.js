"use strict";

/**
 * 加密
 * crypto 模块提供了加密功能，包括对 
 * OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装
 * 使用 require('crypto') 来访问该模块。
 */
const crypto = require('crypto');
const fs = require('fs');


const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log('hash--->', hash);

// Certificate类
const cert = require('crypto').Certificate();
//const spkac = getSpkacSomehow();
const spkac = 'get some how';
const challenge = cert.exportChallenge(spkac);
console.log('cert--->', challenge.toString('utf8'));

const publicKey = cert.exportPublicKey(spkac);
console.log('publicKey--->', publicKey);

console.log('verify--->', cert.verifySpkac(Buffer.from(spkac)));

// Cipher 类
const cipher = crypto.createCipher('aes192', 'a password');
let encrypted = '';
cipher.on('readable', () => {
    const data = cipher.read();
    if (data) {
        encrypted += data.toString('hex');
    }
});

cipher.on('end', () => {
    console.log('encrypted--->', encrypted);
})
cipher.write('some clear text data');
cipher.end();

const input = fs.createReadStream('test.js');
const output = fs.createWriteStream('test.enc');
input.pipe(cipher).pipe(output);

const cipher1 = crypto.createCipher('aes192', 'a password');
let encrypted1 = cipher1.update('some clear text data hahaha', 'utf8', 'hex');
encrypted1 += cipher1.final('hex');
console.log('encrypted1--->', encrypted1);

// Decipher类 略

// DiffidHellman 类
const assert = require('assert');
const alice = crypto.createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

//assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
console.log('DiffidHellman1--->', aliceSecret.toString('hex'));
console.log('DiffidHellman1--->', bobSecret.toString('hex'));

/**
 * ECDH类是创建椭圆曲线Diffie-Hellman（Elliptic Curve Diffie-Hellman (ECDH)）
 * 键交换的实用工具。 
 * ECDH类的实例可以使用crypto.createECDH()方法。
 */
const aliceECDH = crypto.createECDH('secp521r1');
const aliceKeyECDH = aliceECDH.generateKeys();

const bobECDH = crypto.createECDH('secp521r1');
const bobKeyECDH = bobECDH.generateKeys();

const aliceSecretECDH = aliceECDH.computeSecret(bobKeyECDH);
const bobSecretECDH = bobECDH.computeSecret(aliceKeyECDH);
console.log('aliceSecretECDH--->', aliceSecretECDH.toString('hex'));
console.log('bobSecretECDH--->', bobSecretECDH.toString('hex'));

//  Hash类


















