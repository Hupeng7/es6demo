
const collect = require('collect.js');
var arr1 = [{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 3, name: "C" }, { id: 4, name: "D" }];

var arr = [ { id: 1,
    name: 'admin',
    create_time: '2019-08-22 15:49:42',
    status: 1,
    account_desc: '',
    account: 'admin',
    group_id: 7,
    group_name: '电催1部M1一组',
    team_id: 2,
    team_name: '电催1部',
    role_id: 1,
    role_name: '1级管理员权限' },
  { id: 3,
    name: '修改的姓名2',
    create_time: '2019-08-26 10:46:31',
    status: 1,
    account_desc: '',
    account: 'test2',
    group_id: '',
    group_name: '未分配',
    team_id: '',
    team_name: '未分配',
    role_id: 9,
    role_name: 'test' },
  { id: 5,
    name: '测试3',
    create_time: '2019-08-26 10:46:54',
    status: 1,
    account_desc: '',
    account: 'test3',
    group_id: '',
    group_name: '未分配',
    team_id: '',
    team_name: '未分配',
    role_id: '',
    role_name: '未分配' },
  { id: 6,
    name: '测试4',
    create_time: '2019-08-26 10:47:11',
    status: 1,
    account_desc: '',
    account: 'test4',
    group_id: '',
    group_name: '未分配',
    team_id: '',
    team_name: '未分配',
    role_id: '',
    role_name: '未分配' },
  { id: 7,
    name: '测试7',
    create_time: '2019-08-26 10:47:35',
    status: 1,
    account_desc: '',
    account: 'test7-1',
    group_id: '',
    group_name: '未分配',
    team_id: '',
    team_name: '未分配',
    role_id: '',
    role_name: '未分配' },
  { id: 10,
    name: '测试9',
    create_time: '2019-08-26 11:17:34',
    status: 1,
    account_desc: '',
    account: 'test9',
    group_id: '',
    group_name: '未分配',
    team_id: '',
    team_name: '未分配',
    role_id: '',
    role_name: '未分配' } ];




let arr_new = arr.slice(1, 2);
console.log('arr new --->', arr_new);

// let collection = collect(arr);
// let arr_new1 = collection.forPage(2, 3);

// console.log('arr --->', arr);

// console.log('arr new1 --->', arr_new1);

// npm install collect.js --save