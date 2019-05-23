"use strict";

//创建一个长度为10 且用零填充的Buffer
const buf1 = Buffer.alloc(10);
console.log('buf1--->', buf1);

//创建一个长度为10 且用0x1填充的Buffer
const buf2 = Buffer.alloc(10, 1);
console.log('buf2--->', buf2);

//创建一个长度为10 且未初始化的Buffer
//这个方法比调用 Buffer.alloc()更快
//但返回的Buffer 实例可能包含就数据 因此需要使用fill() write()重写
const buf3 = Buffer.allocUnsafe(10);
console.log('buf3--->', buf3);

//创建一个包含[] Buffer
const buf4 = Buffer.from([1, 2, 3]);
console.log('bbuf4--->', buf4);

// 创建一个包含utf-8字节 [0x74,0xc3,0xa9,0x73,0x74] 的Buffer 
const buf5 = Buffer.from('tést');
console.log('buf5--->', buf5);

// 创建一个包含Latin-1字节 [0x74,0xe9,0x73,0x74] 的Buffer
const buf6 = Buffer.from('tést', 'latin1');

// Buffer 与字符编码
const buf = Buffer.from('hello world', 'ascii');
console.log('buf hex--->', buf.toString('hex'));
console.log('buf base64--->', buf.toString('base64'));

console.log('buf ascii--->', Buffer.from('fhqwhgads', 'ascii'));
console.log('buf utf16le--->', Buffer.from('fhqwhgads', 'utf16le'));

//Buffer 与 TypedArray
const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

//拷贝 arr 的内容
const arr_buf1 = Buffer.from(arr);
//与 arr 共享内存
const arr_buf2 = Buffer.from(arr.buffer);
console.log(arr_buf1);
console.log(arr_buf2);

arr[1] = 6000;
console.log(arr_buf1);
console.log(arr_buf2);

const arr1 = new Uint16Array(20);
const arr1_buf1 = Buffer.from(arr1.buffer, 0, 16);
console.log('arr1_buf1 length--->', arr1_buf1.length);

// Buffer 与迭代器
const buf7 = Buffer.from([1, 2, 3]);
for (const b of buf7) {
    console.log('buf7--->', b);
}

// Buffer类 new Buffer(array)
// Creates a new Buffer containing the UTF-8 bytes of the string 'buffer'
const buf8 = new Buffer([0x62, 0x75, 0x66, 0x65, 0x72]);
console.log('uf8--->', buf8);

const arr2 = new Uint16Array(2);
arr2[0] = 5000;
arr2[1] = 4000;
const arr2_buf1 = new Buffer(arr2.buffer);
console.log('arr2_buf1--->', arr2_buf1);

arr2[1] = 6000;
console.log('arr2_buf1--->', arr2_buf1);

//new Buffer(buffer)
const buf9 = new Buffer('buffer');
const buf10 = new Buffer(buf9);
buf9[0] = 0x61;
console.log(buf9.toString());
console.log(buf10.toString());

//new Buffer(size)
const buf11 = new Buffer(10);
console.log('buf11--->', buf11);

//new Buffer(string[,encoding])
const buf12 = new Buffer('this is a tést');
const buf13 = new Buffer('7468697320697320697320612074c3a97394', 'hex');
console.log(buf12.toString());
console.log(buf13.toString());
console.log(buf12.toString('ascii'));

// buffer.alloc(size[,fill[,encoding]])
const buf14 = Buffer.alloc(5);
console.log(buf14);

const buf15 = Buffer.alloc(5, 'a');
console.log('buf15--->', buf15);

const buf16 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.log('buf16--->', buf16);

//buf[index]
// 拷贝 ASCII 字符串到 BUffer,每次拷贝一个字节
const str1 = "http://nodejs.cn/";
const buf17 = Buffer.alloc(str1.length);
for (let i = 0; i < str1.length; i++) {
    buf17[i] = str1.charCodeAt(i);
}
console.log(buf17.toString('ascii'));

// buf.buffer
const arrayBuffer = new ArrayBuffer(16);
const buffer18 = Buffer.from(arrayBuffer);
console.log(buffer18.buffer === arrayBuffer);

// buf.byteOffset
// 创建一个小于 Buffer.poolSize 的Buffer
const nodeBuffer = new Buffer.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// 将 Buffer 赋值给一个Int8Array
new Int8Array(nodeBuffer.buffer, nodeBuffer.byteOffset, nodeBuffer.length);

// buf.compare(target[,targetStart[,targetEnd[,sourceStart[,sourceEnd]]]])
const buf19 = Buffer.from('ABC');
const buf20 = Buffer.from('BCD');
const buf21 = Buffer.from('ABCD');
console.log(buf19.compare(buf19));
console.log(buf19.compare(buf20));
console.log(buf19.compare(buf21));
console.log(buf20.compare(buf19));
console.log(buf20.compare(buf21));
console.log([buf19, buf20, buf21].sort(Buffer.compare));

const buf22 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const buf23 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);
console.log(buf22.compare(buf23, 5, 9, 0, 4));
console.log(buf22.compare(buf23, 0, 6, 4));
console.log(buf22.compare(buf23, 5, 6, 5));

// buf.copy(target[,targetStart[,sourceStart[,sourceEnd]]])
// 创建两个 Buffer
const buf24 = Buffer.allocUnsafe(26);
const buf25 = Buffer.allocUnsafe(26).fill('!');
for (let i = 0; i < 26; i++) {
    // 97是 'a' 的十进制ASCII值
    buf24[i] = i + 97;
}
// 拷贝 buf24 中第16至19字节偏移量的数据到 buf25第8字节偏移量开始
buf24.copy(buf25, 8, 16, 20);
console.log(buf25.toString('ascii', 0, 25));

// 创建一个Buffer 并拷贝同一 Buffer中一个区域的数据到另一个重叠的区域
const buf26 = Buffer.allocUnsafe(26);
for (let i = 0; i < 26; i++) {
    //97 是 'a'的十进制ASCII值
    buf26[i] = i + 97;
}
buf26.copy(buf26, 0, 4, 10);
console.log(buf26.toString());

// buf.entries()
//输出 Buffer 的全部内容
const buf27 = Buffer.from('buffer');
for (const pair of buf27.entries()) {
    console.log(pair);
}

// buf.equals(otherBuffer)
const buf28 = Buffer.from('ABC');
const buf29 = Buffer.from('414243', 'hex');
const buf30 = Buffer.from('ABCD');
console.log(buf28.equals(buf29));
console.log(buf28.equals(buf30));

// buf.fill(value[,offset[,end]][,encoding])
// 用 ASCII 字符 h 填充 Buffer
const b = Buffer.allocUnsafe(50).fill('h');
console.log(b.toString());

// 用一个双字节字符填充 Buffer
console.log(Buffer.allocUnsafe(3).fill('\u0222'));

const buf31 = Buffer.allocUnsafe(5);
console.log(buf31.fill('a'));
console.log(buf31.fill('aazz', 'hex'));
// console.log(buf31.fill('zz', 'hex'));

//buf.includes(value[,byteOffset][,encoding])
const buf32 = Buffer.from('this is a buffer');
console.log(buf32.includes('this'));
console.log(buf32.includes('is'));
console.log(buf32.includes(Buffer.from('a buffer')));
console.log(buf32.includes(97));
console.log(buf32.includes(Buffer.from('a buffer example')));
console.log(buf32.includes(Buffer.from('a buffer example').slice(0, 8)));
console.log(buf32.includes('this', 4));

// buf.toJSON()
const buf33 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf33);
console.log('json--->', json);
const copy = JSON.parse(json, (key, value) => {
    return value && value.type == 'Buffer' ?
        Buffer.from(value.data) :
        value;
});
console.log('copy--->', copy);

// buf.toString([encoding[,start[,end]]])
const buf34 = Buffer.allocUnsafe(26);
for (let i = 0; i < 26; i++) {
    // 97 是 a 的十进制 ASCII 值
    buf34[i] = i + 97;
}
console.log(buf34.toString('ascii'));
console.log(buf34.toString('ascii', 0, 5));

const buf35 = Buffer.from('tést');
console.log(buf35.toString('hex'));
console.log(buf35.toString('utf8', 0, 3));
console.log(buf35.toString(undefined, 0, 3));

// buf.values()
const buf36 = Buffer.from('buffer');
for (const value of buf36.values()) {
    console.log(value);
}
console.log('------------------------');
for (const value of buf36) {
    console.log(value);
}

// buf.write(string[,offset[,length]][,encoding])
const buf37 = Buffer.alloc(256);
const len = buf37.write('\u00bd + \u00bc = \u00be', 0);
console.log(`${len} 个字节: ${buf37.toString('utf8', 0, len)}`);











