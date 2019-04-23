"use strict";

var _ = require('lodash');

/**
 * 数组对象去重
 * 根据多个属性值 去重 
 */
let list = [
    { id: 1, order: { "card_id": 1, "name": "zhangsan1", "idno": 1234 } },
    { id: 2, order: { "card_id": 1, "name": "zhangsan2", "idno": 1234 } },
    { id: 3, order: { "card_id": 1, "name": "zhangsan3", "idno": 1234 } },
    { id: 4, order: { "card_id": 1, "name": "zhangsan1", "idno": 1234 } },
    { id: 1, order: { "card_id": 1, "name": "zhangsan", "idno": 1234 } },
];

let listU = _.uniqBy(list, 'order.card_id', 'order.name');

var listU1 = [];
for (let i = 0, len = list.length; i < len; i++) {
    var flag = true;
    for (let j = 0, len1 = listU1.length; j < len1; j++) {
        if (list[i].order.card_id == listU1[j].order.card_id
            && list[i].order.name == listU1[j].order.name
            && list[i].order.idno == listU1[j].order.idno) {
            flag = false;
        };
    };
    if (flag) {
        listU1.push(list[i]);
    }
}

console.log('list uniq---', listU);
console.log('list uniq 1---', listU1);

