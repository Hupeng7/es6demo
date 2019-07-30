var assert = require('assert');
var crypto = require('crypto');

const ss = '0eUw2Nk2isX+IRlttM7eKomZCAfJlocPw2lG4uVrc0rOqzK85qW9tKshFrFmY8mrmD 34UO6UBRpOaG4dKnENniZT3l0KSg/ DFOiUu+YbJdxbpPiJs77WYIO1EZ5A70Wxxkc7u3rR2SQfqMwmgP/0yEPeqMqYMcDNgy/ CUI5sBNagdue0L/UknhYSzbzxCNlyA3pyy84IETNfQmiQLHbkLwD3TvfT/ rZdYu9PV2QpNGEFxe6PjcdFFU8gbIeuImjZyJIAU8umpMiMpx3xNqnraie8e7+5dzrS';

const str11 = '{"order_id":"201609010016562012987","dealer_id":"2736123","broker_id":"yiyun","real_name":"张三","card_no":"6228880199872220","phone_no":"13488795491","id_card":"123532612312312321","pay":"100000.00"}';
const str22 = '{"order_id": "201609010016562012987","dealer_id": "2736123","broker_id": "yiyun","real_name": "张三","card_no": "6228880199872220","phone_no": "13488795491","id_card": "123532612312312321","pay": "100000.00"}';

const str = 'data=0eUw2Nk2isX+IRlttM7eKomZCAfJlocPw2lG4uVrc0rOqzK85qW9tKshFrFmY8mrmD34UO6UBRpOaG4dKnENniZT3l0KSg/DFOiUu+YbJdxbpPiJs77WYIO1EZ5A70Wxxkc7u3rR2SQfqMwmgP/0yEPeqMqYMcDNgy/CUI5sBNagdue0L/UknhYSzbzxCNlyA3pyy84IETNfQmiQLHbkLwD3TvfT/rZdYu9PV2QpNGEFxe6PjcdFFU8gbIeuImjZyJIAU8umpMiMpx3xNqnraie8e7+5dzrS&mess=12313&timestamp=123457&key=78f9b4fad3481fbce1df0b30eee58577';
const private_key = '78f9b4fad3481fbce1df0b30eee58577';
const str_Res = '233a9faaee4c9c501b6644504798356d10fb46f0f94076759eab781e14b48552';
const data1 = "data=0eUw2Nk2isX+IRlttM7eKomZCAfJlocPw2lG4uVrc0rOqzK85qW9tKshFrFmY8mrmD34UO6UBRpOaG4dKnENniZT3l0KSg/DFOiUu+YbJdxbpPiJs77WYIO1EZ5A70Wxxkc7u3rR2SQfqMwmgP/0yEPeqMqYMcDNgy/CUI5sBNagdue0L/UknhYSzbzxCNlyA3pyy84IETNfQmiQLHbkLwD3TvfT/rZdYu9PV2QpNGEFxe6PjcdFFU8gbIeuImjZyJIAU8umpMiMpx3xNqnraie8e7+5dzrS&mess=12313&timestamp=123457&key=78f9b4fad3481fbce1df0b30eee58577"

function test_des(param) {
    var key = new Buffer(param.key);
    var iv = new Buffer(param.iv ? param.iv : 0)
    var plaintext = param.plaintext
    var alg = param.alg
    var autoPad = param.autoPad


    // let userpass = crypto.createHash('SHA256').update(str).digest('hex');
    // console.log('userpass---', userpass);
    // const hash = crypto.createHmac('sha256', private_key)
    //     .update(str)
    //     .digest('hex');
    // console.log('hash---', hash);

    console.log('************************************************');

    //encrypt  
    var cipher = crypto.createCipheriv(alg, key, iv);
    cipher.setAutoPadding(autoPad)  //default true  
    var ciph = cipher.update(JSON.stringify('test'), 'utf8', 'hex');
    ciph += cipher.final('hex');
    console.log('encrypt---', alg, ciph)
    const a = new Buffer(ciph)
    var s = a.toString('base64');
    console.log('sss---', s);
    console.log('************************************************');

    const hmac = crypto.createHmac('sha256', 'SO606JA9DYC83sh201o71C94MZDQqK6o')
        .update(s + '&&mess=12313&timestamp=123457&key=SO606JA9DYC83sh201o71C94MZDQqK6o')
        .digest('hex');
    console.log('hmac---', hmac);

    const hmac1 = crypto.createHmac('sha256', '78f9b4fad3481fbce1df0b30eee58577')
        .update(data1)
        .digest('hex');
    console.log('hmac---', hmac1);

    //decrypt  
    // const s1 = new Buffer(ss, 'base64')
    // var s2 = s1.toString();
    // var decipher = crypto.createDecipheriv(alg, key, iv);
    // //cipher.setAutoPadding(autoPad)
    // var txt = decipher.update(s2, 'hex', 'utf8');
    // txt += decipher.final('utf8');
    // console.log(txt == plaintext);
    // console.log('txt--->', txt);
    // assert.equal(txt, plaintext, 'fail');

    const private_key1 = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQC4gY5bEkKOCKN4TBspdJoWN/If8tEH67tIfqK1DRQhrxhtOxWg
+6Bdr2gOASnCdHjgemcjlFLTS8N6jjjKaN17A4HwG5pIlV4x/9aDIsmCJyehZ058
ka8JJC81Z2EN+h8mfubJk56VYoSrFCJ8LYwLRw9FdSKYt35dol8jTxakHQIDAQAB
AoGBALWe0oLTdrBZ0JCaWiJ0pTk52R2Z6Cnj4nd6MLAIL8j4kxLzFldhWnreL4+Z
lYHVJSfTVbOwTdewvLvnQ//7Oggu24Nxy4OXGuv/ifKoXgKsUsjSf8p6mfMx72U5
g7v/bDTDR+MFDFXqQnAeQ6OrbKMGZcV1l2UeMDv+DmZBuRABAkEA8xquCMd9Lodv
qJ3RPakTQV7B2xILrpy8Y0ya8XzWcqBHH9qlOSSdPTawMdP4/epZxshPisPT6D1T
s4H+BB+O8wJBAMJLHzohDxLohkyYPeLGW44UmU36zVqLxNVRv+KuatF+qluBUsc9
q/4Yy8UmH7KdUY1y2Z3Prb1kPIsDWczfZK8CQBcYR8RJv1i2QSNRqtkiwNOK/vui
4T07YqJEWsvqQi0tkNQz31Joag+wrFhvfM4Sf2jlCrlyFSWQ/eylws39eYUCQHk9
JTRBssVKwZsEGQHsYu8q3WryiLfqpZ2zUHij+9XUI3vMHBpl2nBJisXv/zGWx2/r
be3yzOh0pu7b3WphL9MCQH38CAND+Uv6RorfnBXbQMdn+EL4o6eucD7NI3ChTorV
wek5xsV66d/SuFqPGvac979uh19dSUYM3HWLHignpX4=
-----END RSA PRIVATE KEY-----`

    const public_key = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDiOH3OTzq9HGZsshrsAKJ0BjVV
LxHfClrWJNqMzTNUupWuwSuw8FspOpCNdPzbGPlrnrPgtHzfOjpdLnJExfrODajK
sP1vD2dBzldJltRMPxFfh09Y0Z22L4k0TVsfc0vsUY4g2pt1XWxJUsD0ELpXnwJU
HLXMbE9Zzxkm1sbxaQIDAQAB
-----END PUBLIC KEY-----`
    console.log('*******************************************************');
    let sign = crypto
        .createSign('RSA-SHA256')
        .update('helloworld')
        .sign(private_key1, 'base64');
    console.log('sign---', sign);



    const verify = crypto.createVerify('SHA256');
    verify.update('helloworld');
    //console.log('verify--->', verify);
    console.log(verify.verify(public_key, sign));


}

// test_des({  
//     alg: 'des-ecb',  
//     autoPad: true,  
//     key: '01234567',  
//     plaintext: '1234567812345678',  
//     iv: null  
// })  

// test_des({  
//     alg: 'des-cbc',  
//     autoPad: true,  
//     key: '01234567',  
//     plaintext: '1234567812345678',  
//     iv: '12345678'  
// })  

// test_des({  
//     alg: 'des-ede3',    //3des-ecb  
//     autoPad: true,  
//     key: '0123456789abcd0123456789',  
//     plaintext: '1234567812345678',  
//     iv: null  
// })  

// test_des({  
//     alg: 'des-ede3-cbc',    //3des-cbc  
//     autoPad: true,  
//     key: '0123456789abcd0123456789',  
//     plaintext: '1234567812345678',  
//     iv: '12345678'  
// })  

test_des({
    alg: 'des-ede3-cbc',    //3des-cbc  
    autoPad: true,
    key: '123456788765432112345678',
    plaintext: { "order_id": "201609010016562012987", "dealer_id": "2736123", "broker_id": "yiyun", "real_name": "张三", "card_no": "6228880199872220", "phone_no": "13488795491", "id_card": "123532612312312321", "pay": "100000.00" },
    //plaintext: '{"order_id": "201609010016562012987","dealer_id": "2736123","broker_id": "yiyun",',
    iv: '12345678'
})

// test_des({
//     alg: 'des-ede3-cbc',    //3des-cbc  
//     autoPad: true,
//     key: '1qX0t4Gz2C8fym6StEAo8n2i',
//     plaintext: '{"order_id": "201609010016562012987","dealer_id": "24391477","broker_id": "27532644","real_name": "张三","card_no": "6228880199872220","phone_no": "13488795491","id_card": "123532612312312321","pay": "10.00"}',
//     //plaintext: '{"order_id": "201609010016562012987","dealer_id": "2736123","broker_id": "yiyun",',
//     iv: '1qX0t4Gz'
// })

// test_des({
//     alg: 'des-ede3-cbc',    //3des-cbc  
//     autoPad: true,
//     key: '12345AA81Es4567812345678',
//     plaintext: 'test',
//     iv: '12345AA8'
// })