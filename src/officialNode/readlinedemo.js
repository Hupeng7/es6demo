"use strict";

const readline = require('readline');

/**
 * 当发生以下任一情况时会触发 'close' 事件：
调用 rl.close() 方法，且 readline.Interface 实例放弃对 input 流和 output 流的控制；
input 流接收到其 'end' 事件；
input 流接收到 <ctrl>-D 以发信号传输结束（EOT）；
input 流接收到 <ctrl>-C 以发信号 SIGINT，并且 readline.Interface 实例上没有注册 'SIGINT' 事件监听器。
调用监听器函数不传入任何参数。
一旦触发 'close' 事件，则 readline.Interface 实例就完成了。
 */


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入> '
});

// rl.question('你如何看待 Node.js 中文网?', (answer) => {
//     // TODO: 将答案记录在数据库中
//     console.log(`感谢您的宝贵意见:${answer}`);
//     rl.close();
// });

/**
 * 每当 input 流接收到行尾输入（\n、 \r 或 \r\n）时就会触发 'line' 事件。 这种情况通常发生在当用户按下 <Enter> 键或 <Return> 键。
调用监听器函数时会带上包含接收到的那一行输入的字符串。
 */
// rl.on('line', (input) => {
//     console.log(`接收到:${input}`);
//     rl.close();
// });

/**
 * 当发生以下任一情况时会触发 'pause' 事件：
input 流被暂停。
input 流未暂停，且接收到 'SIGCONT' 事件。（参阅 'SIGTSTP' 事件和 'SIGCONT' 事件）
调用监听器函数时不传入任何参数。
 */
// rl.on('pause', () => {
//     console.log('Readline暂停');
// });

/**
 * resume 事件
 * 每当 input 流恢复时，就会触发 'resume' 事件。
调用监听器函数时不传入任何参数。
 */
// rl.on('resume', () => {
//     console.log('Readline 恢复');
// });

/**
 * completer 函数的使用
 */
// function completer(line) {
//     const completions = '.help .error .exit .quit .q'.split(' ');
//     const hits = completions.filter((c) => c.startsWith(line));
//     // 如果没有匹配 则显示所有补全
//     return [hits.length ? hits : completions, line];
// }

// 示例1 微型 cli
rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case 'hello':
            console.log('world!');
            break;
        default:
            console.log(`您输入的是：'${line.trim()}'`);
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('再见!');
    process.exit(0);
})

// 示例 逐行读取文件流
// const readline1 = require('readline');
// const fs = require('fs');
// const rl1 = readline1.createInterface({
//     input: fs.createReadStream('sample.txt');
//     crlfDelay: Infinity
// });

// rl.on('line', (line) => {
//     console.log(`文件的每行内容：${line}`);
// })






















