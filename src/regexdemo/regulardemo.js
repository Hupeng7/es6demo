"use strict";

var str = "abc123def";
var patt1 = /[0-9]+/;
console.log(str.match(patt1));
/**
 * 
 * 数字： ^[0-9]*$
 * n位数字： ^d{n}$
 * 至少n位的数字： ^\d{n,}$
 * m-n的数字： ^\d{m,n}$
 * 零和非零开头的数字： ^(0|[1-9][0-9]*)$
 * 非零开头的最多带两位小数的数字： ^([1-9][0-9]*)+(\.[0-9]{1,2})?$
 * 带1-2位小数的正数或负数： ^(\-)?\d+(\.\d{1,2})$
 * 正数 负数 和小数： ^(\-|\+)?\d+(\.\d+)?$
 * 有两位小数的正实数： ^[0-9]+(\.[0-9]{2})?$
 * 有1~3位小数的正实数： ^[0-9]+(\.[0-9]{1,3})?$
 * 
 */

