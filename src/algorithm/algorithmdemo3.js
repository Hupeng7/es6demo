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

var list = [
    { app_id: 1, overdue_principal: 1000 },
    { app_id: 2, overdue_principal: 2000 },
    { app_id: 3, overdue_principal: 3000 },
    { app_id: 4, overdue_principal: 4000 },
    { app_id: 5, overdue_principal: 5000 },
    // { app_id: 6, overdue_principal: 2000 },
    // { app_id: 7, overdue_principal: 6000 },
];


var users_per = [
    { user_id: 1, name: 'zhangsan', assign_overdue_principal: 1000 },
    { user_id: 2, name: 'lisi', assign_overdue_principal: 2000 },
    { user_id: 3, name: 'wangwu', assign_overdue_principal: 3000 },
    { user_id: 4, name: 'zhaoliu', assign_overdue_principal: 4000 },
    { user_id: 5, name: 'xiaowu', assign_overdue_principal: 5000 },
];

/**
 * 思路
 * 无限循环 直到list没数
 * 1.循环user列表 分配多的先分配  
 * 2.循环list 金额倒序
 *   每次循环  user.assign_overdue_principal - list.overdue_principal 减到0或者list为空跳出
 *   达到条件后
 */
function avgNumConsiderOriginalNum(list, users_per) {
    list = _.orderBy(list, ['overdue_principal'], ['desc']);
    users_per = _.orderBy(users_per, ['assign_overdue_principal'], ['desc']);

    console.log('list service---', list);
    let user_case_list = [];
    let list_new = list;
    while (list_new.length > 0) {
        for (let i = 0, len = users_per.length; i < len; i++) {
            console.log('i', i, 'user id---', users_per[i].user_id);
            let user_assign_overdue_principal = users_per[i].assign_overdue_principal;
            let cases = [];
            // console.log('list_new service---', list_new);
            for (let j = 0, len1 = list_new.length; j < len1; j++) {
                console.log('list new---', j, '---', list_new[j]);
                cases.push(list_new[j].app_id);
                user_assign_overdue_principal = user_assign_overdue_principal - list_new[j].overdue_principal;
                console.log('user_assign_overdue_principal---', user_assign_overdue_principal);
                if (list_new.length <= 0 || user_assign_overdue_principal <= 0) {
                    break;
                }

            }
            list_new = _.drop(list_new, cases.length);
            // console.log('cases 1111---', cases);
            user_case_list.push({
                user_id: users_per[i].user_id,
                name: users_per[i].name,
                // account: users_per[i].account,
                // group_id: users_per[i].group_id,
                // group_name: users_per[i].group_name,
                cases: cases
            });
        }
        if (list_new.length <= 0) {
            break;
        }
    }
    console.log('user_case_list o num---', user_case_list);
    return user_case_list;
}



var o_g = avgNumConsiderOriginalNum(list, users_per);