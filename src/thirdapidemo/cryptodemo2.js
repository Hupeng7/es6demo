
// const axios = require('axios');
const https = require('https');
const CryptoJS = require("crypto-js");
const sha256 = require("crypto-js/sha256")
const hmacSHA256 = require('crypto-js/hmac-sha256');
const Hex = require('crypto-js/enc-hex');
const random = require('string-random');
const plaintext1 = {
    "order_id": "201609010016562012987",
    "dealer_id": "24391477",
    "broker_id": "yiyun",
    "real_name": "张三",
    "card_no": "6228880199872220",
    "phone_no": "13488795491",
    "id_card": "123532612312312321",
    "pay": "100000.00"
};
const plaintext = {
    "notify_id": "14732279660721952",
    "notify_time": "2019-07-16 10:20:34",
    "data": {
        "pay": "20.00",
        "anchor_id": "test",
        "broker_id": "27532644",
        "card_no": "6217856100026590023",
        "dealer_id": "24391477",
        "id_card": "340823199112234432",
        "order_id": "TX0001190716102020",
        "phone_no": "13515102036",
        "real_name": "胡鹏",
        "ref": "79822056820047883",
        "notes": "56244623 20160901-1",
        "status": "1",
        "status_detail": "0",
        "status_message": "已打款",
        "status_detail_message": "已打款",
        "sys_amount": "0.00",
        "fee_amount": "0.00",
        "broker_amount": "20.00",
        "broker_fee": "7.10",
        "pay_remark": "打款备注",
        "sys_wallet_ref": "",
        "sys_bank_bill": "",
        "broker_wallet_ref": "",
        "broker_bank_bill": ""
    }
}


const url = "https://api.jiesuan.local:8084/api/dataservice/v1/order/downloadurl";
const agent = new https.Agent({
    rejectUnauthorized: false
});

const dealer_id = "wangyunxiu";
//const des3_key = "123456788765432112345678";
// const des3_key = "12345AA81Es4567812345678";
// const sign_key = "78f9b4fad3481fbce1df0b30eee58577";
const des3_key = "1qX0t4Gz2C8fym6StEAo8n2i";
const sign_key = "SO606JA9DYC83sh201o71C94MZDQqK6o";

var content = {
    "order _date": "2017-11-11"
};
var iv = des3_key.slice(0, 8);
var bytes = CryptoJS.TripleDES.encrypt(
    JSON.stringify(plaintext),
    CryptoJS.enc.Utf8.parse(des3_key),
    {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
// var data = bytes.final('base64')
// var data = Base64.stringify(bytes)
console.log(JSON.stringify(content), iv);
var data = bytes.toString();
console.log('req data---', data);
//console.log(bytes)
// 第一步把16进值字符串转为wordArray格式
// const wordArray = CryptoJS.enc.Hex.parse(data);

// const base64str = CryptoJS.enc.Base64.stringify(wordArray);

//const data1 = "hvLoj6C5M98PytpS+s/a7lyd1GAPytF7SGUJAzmN2kOoWSx+dHrNYKbH1yHPkJPK2qSLf6YihC6IWILilgH5/5fwqb/JkrW/t9me1eCvHRdroFNHluFf2B5G2KkRJiizk1UsyN0g0HR7DJa6TsH+fmARz0+9fksNjMfjg/KIClfVLv7rIWC5UnOWDEtp+CRODcQMPowZeYdlLltNLihcEowRLS6pWqVFZ8Ic1hXFztayNqha+EftjjVvfQO6yJkmVEgeC1HJHFArLc28gEb8mg6mUgQMQRdXRYTyuXuTzTk088DozQz+L/zhHYWj2aVzDpDwqdxb2mz/sVNJ9GGbIQDOeYKfrbK2qBsNa1B2XP5qa0KeohJ2Hzzcw3PBArx+ijcHrhK1R8QaPKPXdjfsUGZOcoeWVZnNXWSyvYEoepfYSJ4sa7q+Jb0+kZjLbRQzeO3Ptm/Nhzrl/34Ol3xwQ7xPKD0YW9s5bbMS2nSNC71q3RQzVdC5gPDinkASw9FhueZqy+l1ex03U4iU3g1/3TgQ8r1kxn/LAQq37D+vU1y41gDnRwhkJ/x8HW7F4JoegFuSQavEZAp0poiupLV5pYFEoDiAS/AjSHnixFmL1UntWpP6kQ0C+TJHtgxxVsoriH2evvyp3sTVQhUpClVOI5vDECtZElbuMMT5xgMsnGjxAGCJMSmLRep+F/rXPWCZg6w7nHkr5sPM/SCEpMQB6zAK44fqXZpJb73rLkRZGAoFsrzAhlIAJyU3K5D/vJtn1cbehuRW9P6TON2BhdlEo9D93IosE0vdq6CbVWhSwD54wJuS/de0CjqV52kUVht9tk2zePQG/cLAgwU0Jd3cCeIHcVKxrJEg03zMxmHWoLI=";
const data1 = "9d5CAj31Sznjs7zznCLfPsH0goxxhLH6NPfh6M4IxS7ZdMUm7SinLFQsbHdX47rc8I4I9K6RxUbuKnp+XboZLCxnlfNe7dhX/xQCOBpGdu7w7C3TAd+lOh0oGciAjLeN2cnInP/u3g25IT+eT3zBA0A3RIIhcOP64oyET4UjZwzp3cFjCIl19P/TWNFnhnFKRWJvrr6EHTDi+79V+csT9mfH7acc+ghmybk8/I5uJnwyaxUXL+gJj91S2kUrMJPjyNnb3LwNkb5HBeps/AkKOkChGuILrU++KUg7C66Rc1/1QFwvEWvnq+Lj4cbQiyqk/qr8rHD/3hbo0sXFpp9pluS3BWAvLSO0UPEoYLrUC0juPFcmhDxeZmnDe6xbyQopmsjAzOwNZypkPmHoOibxhiuO2+2T7B+2+QZHYC9lE8uJhjumOBZpy3hvSVQMOeIhNDR9FD9xjaltx21K9Qi3Mu/YQ5AfINM2mNsiKs8adrHsqMhb8SQSYch/wTeJ2PuakDXKbykA78hz2PRJa+mFoOikNayVR1wVYRgknCR8BqRXh8f6PEoQ8hPHVVkAh/Ohd7PAUCuJfnXAs/y6sDLDk51c5M04RkbwJiuf+mVAKPn/fIrA/e+rYSDOshMf6td9IzinK/mWewYsq86RkwWvcPZS6+PnJGqp5SKNNdxnCsSGyWzOv44M7/8ylOtJwjuW4UTPzxF1VoB3HdDoiZiFVN+tBwpQWnPjk11c+Ae36hjmzPb1MUFoNLg3H80o8o1nqjJQ3ELeJbm9mC3EDKclol6UWKmKeAieFbx6WQJSY9u2EJIol5WFn4FvyMxRjqEukQ5qMkisQ6K+/q67LIjo7dKKo6upSFrqI4zO6ANRQU=";
const data2 = "9d5CAj31Sznjs7zznCLfPsH0goxxhLH6NPfh6M4IxS7ZdMUm7SinLFQsbHdX47rc8I4I9K6RxUbuKnp+XboZLCxnlfNe7dhX/xQCOBpGdu7w7C3TAd+lOh0oGciAjLeN2cnInP/u3g25IT+eT3zBA0A3RIIhcOP64oyET4UjZwzp3cFjCIl19P/TWNFnhnFKRWJvrr6EHTDi+79V+csT9mfH7acc+ghmybk8/I5uJnwyaxUXL+gJj91S2kUrMJPjyNnb3LwNkb5HBeps/AkKOkChGuILrU++KUg7C66Rc1/1QFwvEWvnq+Lj4cbQiyqk/qr8rHD/3hbo0sXFpp9pluS3BWAvLSO0UPEoYLrUC0juPFcmhDxeZmnDe6xbyQopmsjAzOwNZypkPmHoOibxhiuO2+2T7B+2+QZHYC9lE8uJhjumOBZpy3hvSVQMOeIhNDR9FD9xjaltx21K9Qie3Mu/YQ5AfINM2mNsiKs8adrHsqMhb8SQSYch/wTeJ2PuakDXKbykA78hz2PRJa+mFoOikNayVR1wVYRgknCR8BqRXh8f6PEoQ8hPHVVkAh/Ohd7PAUCuJfnXAs/y6sDLDk51c5M04RkbwJiuf+mVAKPn/fIrA/e+rYSDOshMf6td9IzinK/mWewYsq86RkwWvcPZS6+PnJGqp5SKNNdxnCsSGyWzOv44M7/8ylOtJwjuW4UTPzxF1VoB3HdDoiZiFVN+tBwpQWnPjk11c+Ae36hjmzPb1MUFoNLg3H80o8o1nqjJQ3ELeJbm9mC3EDKclol6UWKmKeAieFbx6WQJSY9u2EJIol5WFn4FvyMxRjqEukQ5qMkisQ6K+/q67LIjo7dKKo6upSFrqI4zO6ANRQU=";
var bytesDe = CryptoJS.TripleDES.decrypt(
    data2,
    CryptoJS.enc.Utf8.parse(des3_key),
    {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
console.log('bytesDe---', bytesDe);
const byteDeStr = bytesDe.toString(CryptoJS.enc.Utf8);
console.log('byteDeStr---', byteDeStr);
// var data = bytes.final('base64')
// var data = Base64.stringify(bytes)
// var dataDe = bytesDe.toString();
// console.log('dataDe---', dataDe);
//console.log(bytes)


// 签名
var timestamp = parseInt(Date.now() / 1000);
var sign_type = "sha256";
var mess = random(5);
var sign_content = `data=${data}&mess=12313&timestamp=123457&key=${sign_key}`;
console.log("sign_content", sign_content);
var sign = Hex.stringify(hmacSHA256(sign_content, sign_key));
console.log("sign", sign);

// axios.get(url, {
// 	params: {data, mess, sign, timestamp, sign_type},
// 	headers: {"dealer-id": dealer_id}, 
// 	httpsAgent: agent 
//     }).then(response => {
//     console.log(response.status, response.statusText)
//     console.log(response.data)

//     // console.log(response.data)
// }).catch(error => {
//     console.log(error.response.status, error.response.statusText)
//     // console.log(error)
// })
