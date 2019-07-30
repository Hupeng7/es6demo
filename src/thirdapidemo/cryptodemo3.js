var assert = require('assert');
var crypto = require('crypto');

const data = { "product_id": "2-34000001", "product_name": "\u6613\u7f8e\u4ed8", "user_name": "\u6d4b\u8bd5\u59d3\u540d", "user_mobile": "15201595004", "fangkuan_limit": 8800, "timestamp": 1553851820 };

const destr = 'Pg+x+Dq6lgZCWIL+4J4pw5I/GbnTNM9gwL/MzYU8NSSkbVVz3npGZGvEE+M+dmLsdHdbBbwNMM0Ma6WSreaPntHROxe9jpLOsqn2MpcYD9FB1v4ZopirF8lD61evBQGBgaqmg9mKD/eoOGIH7sropfDITPUObj08DUVA4WYP4mfj3396GgDApaqw1NoqtgSdHxUrAgrYGojgQfSoMjtf49rqT9CijvQ6dtrkfsxmhG0=';

const data1 = { "product_id": "1-10442619", "user_mobile": "13515102036", "user_name": "\\u80e1\\u9e4f", "id_card": "340823199112234432", "channel_id": "127016419" };

// function toUnicode(s) {
//     return s.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g, function (newStr) {
//         return "\u" + newStr.charCodeAt(0).toString(16);
//     });
// }
const data2 = { "product_id": "2-32000001", "product_name": "榕树贷款-1", "user_name": "张三", "user_mobile": "13512341234", "fangkuan_limit": 8800, "create_time": 1563785265, "fangkuan_time": 1563870444, "timestamp": 1563785265, "order_id": 123456, "id_card": "123456789123456789" };

function stringToUnicode(str) {
    return escape(str).replace(/%u/gi, '\\u');//如果不替换,输出格式为:%uxxxx%uxxxx
}

function test_des(param) {
    var key = new Buffer(param.key);
    var plaintext = param.plaintext
    var alg = param.alg
    var autoPad = param.autoPad
    var iv = new Buffer(param.iv ? param.iv : 0)
    console.log('************************************************');

    //const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    hash.update('f9965e29ad0907c2');
    let hashd = hash.digest('hex');
    console.log(hashd);
    let newkey = hashd.substr(8, 16);
    console.log('new key---', newkey);

    const md5 = crypto.createHash('md5');
    md5.update(newkey);
    let md5d = md5.digest('hex');
    console.log(md5d);
    let newiv = md5d.substr(8, 16);
    console.log('new iv---', newiv);

    const mmmm = { "product_id": "2-34000001", "product_name": "\u6613\u7f8e\u4ed8", "user_name": "\u6d4b\u8bd5\u59d3\u540d", "user_mobile": "15201595004", "fangkuan_limit": 8800, "timestamp": 1553851820 };
    const desstr = 'riXOyT9DRcKew6iFDG32sFb3Rb4XpE0/U7hjdIvOftNPjX/y4WUto1QsxnxiQuNL9nYoARyoEmWphaNF7ObPYVS50qWSfKgSey0ZZmCM3FPdyRfixdUccKspIrfoRj34w848/jQbLsmF6fEoz4ey5+nZoBd7aihb/t77NfNbgKXkVgn8o0rkbwF//GggTq9dBhdSaxHlDQhEHrTCBp9aCEzsyAahYQtbYCdU2Oc19fQ=';
    const md5new = crypto.createHash('md5').update('f9965e29ad0907c2' + desstr).digest('hex');
    console.log('md5 new---', md5new);


    /**
      * 加密方法
      * @param key 加密key
      * @param iv       向量
      * @param data     需要加密的数据
      * @returns string
      */

    const cipher = crypto.createCipheriv('aes-128-cbc', newkey, newiv, { authTagLength: 16 });
    var cipherResult = cipher.update(JSON.stringify(data2), 'utf8', 'base64');
    //cipherResult += cipher.final('hex');//返回hex编码的字符串
    cipherResult += cipher.final('base64');//返回hex编码的字符串

    //console.log('cipher: ', cipherResult.toString('base64'));
    console.log('cipher: ', cipherResult);
    const md5new1 = crypto.createHash('md5').update('f9965e29ad0907c2' + cipherResult).digest('hex');
    console.log('md5 new1---', md5new1);

    //return cipherResult.toLocaleUpperCase();


    /**
     * 解密方法
     * @param key      解密的key
     * @param iv       向量
     * @param crypted  密文
     * @returns string
     */
    let b = "Q49jqSaIg5stwJi0kke3d5YJl2v5W+NKe+VA5IYun0HApRPpNtqpQpMe2AnFTcRvlOCtNRV6nYQDBHj4JM0RsJsgiVBDc+uWXfiNzr7YpIOO7VsqnLmqTmM09Lhw3+js1pzebjMSs2C3umoFM0gDiaU98rrWhoVZD+D9rMSC+uZpgNetqcVwniJWWHY50dp";
    var decipher = crypto.createDecipheriv('aes-128-cbc', newkey, newiv, { authTagLength: 16 });
    var decrypted = decipher.update(cipherResult, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    console.log('decrypted: ', decrypted);
    console.log(decrypted == destr);
    //return decrypted;



}


test_des({
    alg: 'des-ede3-cbc',    //3des-cbc  
    autoPad: true,
    key: 'f9965e29ad0907c2',
    plaintext: { "order_id": "201609010016562012987", "dealer_id": "2736123", "broker_id": "yiyun", "real_name": "张三", "card_no": "6228880199872220", "phone_no": "13488795491", "id_card": "123532612312312321", "pay": "100000.00" },
    //iv: '12345678'
})

