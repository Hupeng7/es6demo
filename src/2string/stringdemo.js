
//1. 基础用法
let message = 'Hello World';
console.log(message);

message = `Hello \`World`;
console.log(message);

//2. 嵌入变量
/**
 * 模板字符串支持嵌入变量，只需要将变量名写在 ${} 之中，其实不止变量，
 * 任意的 JavaScript 表达式都是可以的：
 */
let x = 1, y = 2;
let message2 = `<ul><li>${x}</li><li>${x + y}</li></ul>`;
console.log(message2);
/**
 * 值得一提的是，模板字符串支持嵌套:
let arr = [{value: 1}, {value: 2}];
let message = `
	<ul>
		${arr.map((item) => {
			return `
				<li>${item.value}</li>
			`
		})}
	</ul>
`;
console.log(message);
 */

//3. 标签模板
/**
 * 模板标签是一个非常重要的能力，模板字符串可以紧跟在一个函数名后面，
 * 该函数将被调用来处理这个模板字符串，举个例子：
 */
let x1 = 'Hi', y1 = 'Kevin';
var res = message3`${x1},I am ${y1}`;
console.log(res);
// 自定义 message3函数来处理返回的字符串
//literals 文字
//注意在这个例子中 literals 的第一个元素和最后一个元素都是空字符串
function message3(literals, ...values) {
    let result = '';
    for (let i = 0, len = values.length; i < len; i++) {
        result += literals[i];
        result += values[i];
    }
    result += literals[literals.length - 1];
    return result;
}

function message3_1(literals, ...values) {
    let result = literals.reduce((prev, next, i) => {
        let value = values[i - 1];
        return prev + value + next;
    });
    return result;
}

//4. oneLine
let message4 = `
        Hi,
        Daisy!
        I am
        Kevin.`;
/**
 * 出于可读性或者其他原因，我希望书写的时候是换行的，但是最终输出的字符是在一行，
 * 这就需要借助模板标签来实现了，我们尝试写一个这样的函数：
 */
//oneLine 第一版
function oneLine(template, ...expressions) {
    let result = template.reduce((prev, next, i) => {
        let expression = expressions[i - 1];
        return prev + expression + next;
    });
    result = result.replace(/(\n\s*)/g, " ");
    result = result.trim();
    return result;
}
