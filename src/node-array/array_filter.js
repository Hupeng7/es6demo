"use strict";

/**
 * 多条件多数据筛选
我最初是用了很笨的双for循环去做，发现很慢，而且并没有达到预期的效果。具体的心路历程已经太遥远，简单介绍以下这个筛选算法。
首先是把筛选条件都塞到一个对象里，用object对象的keys方法获取到筛选的条件名，及需要筛选的是哪个条件，是name？age? gender?
然后使用filter方法对目标数据进行筛选，🌰如下⬇️
根据名字和年龄多元素筛选
 */
function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);

    return array.filter((item) => {
        return filterKeys.every(key => {
            if (!filters[key].length) return true;
            return !!~filters[key].indexOf(item[key]);
        })
    })
}
// 这个是例子中的被筛选数组
var array = [
    { name: 'Anne', age: 23, gender: 'female' },
    { name: 'Leila', age: 16, gender: 'female' },
    { name: 'Jay', age: 19, gender: 'male' },
    { name: 'Mark', age: 40, gender: 'male' }
]

var filters = {
    name: ['Leila', 'Jay'],
    age: [19]
};
console.log(multiFilter(array, filters));

/**
 * 多条件单数据筛选
根据单个名字或者单个年龄筛选，用filter方法，判断条件之间是或的关系。
 */
function filterByName2(aim, name, age) {
    return aim.filter(item => item.name == name || item.age == age);
}
console.log(filterByName2(array, 'Leila', 19));

/**
 * 单条件多数据筛选
根据多个名字筛选，这里是用for循环遍历目标数组，然后用find方法找到后push到结果数组里，
用find方法是重名情况下也能得到想要的结果。
for循环可以用数组的一些遍历方法替代，代码可以更简化，示例就是大概表达个意思。
 */
function filterByName1(aim, nameArr) {
    let result = [];
    for (let i = 0; i < nameArr.length; i++) {
        result.push(aim.find(item => item.name = nameArr[i]));
    }
    return result;
}
console.log(filterByName1(array, ['Leila', 'Jay']));

/**
 * 单条件单数据筛选
根据单个名字筛选，用filter方法，判断name是否为目标名字即可
 */
function filterByName(aim, name) {
    return aim.filter(item => item.name == name);
}
console.log(filterByName(array, 'leila'));
console.log('--------------------------');
console.log(filterByName(array, 'Leila'));

/**
 * 以上代码中，使用了以下的api
1、filter()：数组的过滤器方法
2、Object.keys()：es6提供的方法，用来获取对象键值对的键的集合
3、every()：数组的every方法，因为检查数组内的所有元素是否都满足 某一条件，如果都满足返回true,.如果有一项元素不满足就返回false。
4、includes():es7中提供的新方法，用于检测某字符串中是否包含给定的值，如果有返回true，没有返回false,数组中也有该方法。
 */
const filter = (condition, data) => {
    return data.filter(item => {
        return Object.keys(condition).every(key => {
            return String(item[key]).toLowerCase().includes(
                String(condition[key]).trim().toLowerCase()
            )
        })
    })
}

var condition1 = { name: 'Mark', age: 16 };
var condition = { gender: 'female' };
console.log('--------------------------');
console.log(filter(condition, array));























