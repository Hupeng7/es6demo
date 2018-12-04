// var express = require('express');
// var router = express.Router();
// var app = express();
//
// /* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {title: 'Express'});
// });
//
// // 主页输出 "Hello World"
// router.get('/hello', function (req, res) {
//     console.log("主页 GET 请求");
//     res.send({code: 2000, msg: 'seccess', result: 'hello world'});
//
// });
//
// // 银行列表
// router.get('/listBanks', function (req, res) {
//     console.log("主页 银行列表 请求");
//     res.send({
//         banks: [{
//             id: 1,
//             name: '工商银行',
//             en: 'ICBC',
//             text: '工商银行借记卡'
//         },
//             {
//                 id: 2,
//                 name: '中国银行',
//                 en: 'ABC',
//                 text: '中国银行借记卡'
//             },
//             {
//                 id: 3,
//                 name: '建设银行',
//                 en: 'CBC',
//                 text: '建设银行借记卡'
//             }]
//     });
// })
//
// //  POST 请求
// router.post('/', function (req, res) {
//     console.log("主页 POST 请求");
//     console.log(req);
//     res.send({
//         id: 1,
//         name: '工商银行',
//         en: 'ICBC',
//         text: '工商银行借记卡'
//     });
// })
//
// //  /del_user 页面响应
// router.get('/del_user', function (req, res) {
//     console.log("/del_user 响应 DELETE 请求");
//     res.send('删除页面');
// })
//
// //  /list_user 页面 GET 请求
// router.get('/list_user', function (req, res) {
//     console.log("/list_user GET 请求");
//     res.send('用户列表页面');
// })
//
// // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// router.get('/ab*cd', function (req, res) {
//     console.log("/ab*cd GET 请求");
//     res.send('正则匹配');
// })
//
//
// module.exports = router;
