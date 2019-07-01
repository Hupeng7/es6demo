"use strict";
const querystring = require('querystring');

var querystring1 = querystring.parse('foo=bar&abc=xyz&abc=123');
console.log('querystring1---', querystring1);

var querystring2 = querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,
    { decodeURIComponent: gbkDecodeURIComponent });
console.log('querystring2---', querystring2);

function gbkDecodeURIComponent() { };

var querystring3 = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
console.log('querystring3---', querystring3);

var querystring4 = querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
console.log('querystring4---', querystring4);



































