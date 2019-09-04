"use strict";
//import _ from 'lodash';
var _ = require('lodash');

/**
 * 分案算法
 * list 案件列表
 * users 负责人列表
 * 均分  按比例分  
 * todo 考虑负责人原有案件量
 */

var list2 = [{ c: 1, m: 1000 },
{ c: 2, m: 5000 },
{ c: 3, m: 3000 },
{ c: 4, m: 11000 },
{ c: 5, m: 31000 },
{ c: 6, m: 2000 },
{ c: 7, m: 6000 },];

var list1 = [{ c: 1, m: 1000 },
{ c: 2, m: 5000 },];

var users1 = [{ id: 1, name: 'zhangsan' },
{ id: 2, name: 'lisi' },
{ id: 3, name: 'wangwu' },
{ id: 4, name: 'zhaoliu' },];

var users2 = [{ id: 1, name: 'zhangsan' },
{ id: 2, name: 'lisi' },
{ id: 3, name: 'wangwu' },];

var list = (function a() {
    let a = [];
    for (let i = 0; i < 100000; i++) {
        a.push({ c: i + 1, m: (i + 1) * 1000 });
    }
    return a;
})();
// console.log('list2------', list2);

var users = (function a() {
    let a = [];
    for (let i = 0; i < 99; i++) {
        a.push({ id: i + 1, name: 'username_' + (i + 1) });
    }
    return a;
})();
// console.log('users2------', users2);

/**
 * 均分 case
 */
function avgNum(list, users) {
    //console.log('list---', list, 'users---', users);
    // users 不能为 0
    let user_case_list = [];
    let a_count = Math.floor(list.length / users.length);
    // 均数为0时变为1 不能为负
    a_count = a_count == 0 ? 1 : a_count;
    console.log('a_count---', a_count);
    let list_new = list;
    while (list_new.length > 0) {
        for (let i = 0, len = users.length; i < len; i++) {
            user_case_list.push({ user_id: users[i].id, case: list_new.slice(0, a_count) });
            list_new = _.drop(list_new, a_count);
            console.log('i count ---', i, list_new.length);
            // console.log('list_new---', i, list_new);
            //console.log('iiii', i, '---user case list---', user_case_list);
            if (list_new.length <= 0) {
                break;
            }
            if (list_new.length < users.length) {
                console.log('除不尽最后除数 被除数', list_new.length, users.length);
                a_count = Math.floor(list_new.length / users.length);
                // 均数为0时变为1 不能为负
                a_count = a_count == 0 ? 1 : a_count;
            }
        }
        //console.log('list_new---', list_new);
        if (list_new.length <= 0) {
            break;
        }
    }
    //console.log('user_case_list---', user_case_list);
}

var a = avgNum(list, users);

var users_per = [{ id: 11, name: 'zhangsan', per: 0.1 },
{ id: 12, name: 'lisi', per: 0.2 },
{ id: 13, name: 'wangwu', per: 0.7 },];

/**
 * 百分比 case
 */
function percentNum(list, users_per) {
    //console.log('list---', list, 'users_per---', users_per);
    let user_case_list = [];
    //let a_count = Math.floor(list.length / users.length);
    // 均数为0时变为1 不能为负
    let a_count = 0;
    //console.log('a_count---', a_count);
    let list_new = list;
    while (list_new.length > 0) {
        for (let i = 0, len = users_per.length; i < len; i++) {
            a_count = Math.ceil(list.length * users_per[i].per);
            a_count = a_count == 0 ? 1 : a_count;
            //console.log('a_count---', i, a_count);
            user_case_list.push({ user_id: users_per[i].id, case: list_new.slice(0, a_count) });
            list_new = _.drop(list_new, a_count);
            //console.log('list_new---', i, list_new);
            //console.log('iiii', i, '---user case list---', user_case_list);
            if (list_new.length <= 0) {
                break;
            }
        }
        //console.log('list_new---', list_new);
        if (list_new.length <= 0) {
            break;
        }
    }
    // console.log('user_case_list---', user_case_list);
}

var p = percentNum(list, users_per);

/**
 * 均分 case 考虑负责人原有案件量
 * 
 */
var user_co = (function a() {
    let a = [];
    for (let i = 0; i < 5; i++) {
        a.push({
            id: i + 1, name: 'username_' + (i + 1), o_num: 1 + i
        });
    }
    return a;
})();
function avgNumConsiderOriginalNum(list, user_co) {
    // console.log('list---', list, 'user_co---', user_co);
    let user_case_list = [];
    let a_count = Math.floor(list.length / user_co.length);
    // 均数为0时变为1 不能为负
    a_count = a_count == 0 ? 1 : a_count;
    //console.log('a_count o num---', a_count);
    let list_new = list;
    while (list_new.length > 0) {
        for (let i = 0, len = user_co.length; i < len; i++) {
            // console.log('a count---a count---a count---a count---', a_count);
            user_case_list.push({ user_id: user_co[i].id, case: list_new.slice(0, a_count) });
            list_new = _.drop(list_new, a_count);
            // console.log('list_new o num ---', i, list_new);
            // console.log('iiii o num', i, '---user case list o num---', user_case_list);
            if (list_new.length <= 0) {
                break;
            }
            if (list_new.length < user_co.length) {
                //  console.log('sdsadsadasdsadsa', list_new.length, user_co.length);
                a_count = Math.floor(list_new.length / user_co.length);
                // 均数为0时变为1 不能为负
                a_count = a_count == 0 ? 1 : a_count;
            }
        }
        //console.log('list_new o num---', list_new);
        if (list_new.length <= 0) {
            break;
        }
    }
    // console.log('user_case_list o num---', user_case_list);
}
var o_g = avgNumConsiderOriginalNum(list, user_co);