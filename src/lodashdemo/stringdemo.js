"use strict";
var _ = require('lodash');

//_.camelCase([string=''])
let camelCase1 = _.camelCase('Foo Bar');
console.log('camelCase1--->', camelCase1);
//camelCase1---> fooBar
let camelCase2 = _.camelCase('--foo-bar--');
console.log('camelCase2--->', camelCase2);
//camelCase2---> fooBar
let camelCase3 = _.camelCase('__FOO_BAR__');
console.log('camelCase3--->', camelCase3);
//camelCase3---> fooBar

//_.capitalize([string=''])
let capitalize1 = _.capitalize('FRED');
console.log('capitalize1--->', capitalize1);
//capitalize1---> Fred

//_.deburr([string=''])
let deburr1 = _.deburr('déjà vu');
console.log('deburr1--->', deburr1);
//deburr1---> deja vu

// _.endsWith([string=''],[target],[position=string.length])
let endsWith1 = _.endsWith('abc', 'c');
console.log('endsWith1--->', endsWith1);
//endsWith1---> true
let endsWith2 = _.endsWith('abc', 'b');
console.log('endsWith2--->', endsWith2);
//endsWith2---> false
let endsWith3 = _.endsWith('abc', 'b', 2);
console.log('endsWith3--->', endsWith3);
//endsWith3---> true

//_.escape([string=''])
let escape1 = _.escape('fred,barney,& pebbles');
console.log('escape1--->', escape1);
//escape1---> fred,barney,&amp; pebbles

//_.escapeRegExp([string=''])
let escapeRegExp1 = _.escapeRegExp('[lodash](https://lodash.com/)');
console.log('escapeRegExp1--->', escapeRegExp1);
//

// _.kebabCase([string=''])
let kebabCase1 = _.kebabCase('Foo Bar');
console.log('kebabCase1--->', kebabCase1);
//kebabCase1---> foo-bar
let kebabCase2 = _.kebabCase('fooBar');
console.log('kebabCase2--->', kebabCase2);
//kebabCase2---> foo-bar
let kebabCase3 = _.kebabCase('__FOO_BAR__');
console.log('kebabCase3--->', kebabCase3);
//kebabCase3---> foo-bar

//_.lowerCase([string=''])
let lowerCase1 = _.lowerCase('--Foo-Bar--');
console.log('lowerCase1--->', lowerCase1);
//lowerCase1---> foo bar
let lowerCase2 = _.lowerCase('fooBar');
console.log('lowerCase2--->', lowerCase2);
//lowerCase2---> foo bar
let lowerCase3 = _.lowerCase('__FOO_BAR__');
console.log('lowerCase3--->', lowerCase3);
//lowerCase3---> foo bar

//_.lowerFirst([string=''])
let lowerFirst1 = _.lowerFirst('Fred');
console.log('lowerFirst1--->', lowerFirst1);
//lowerFirst1---> fred
let lowerFirst2 = _.lowerFirst('FRED');
console.log('lowerFirst2--->', lowerFirst2);
//lowerFirst2---> fRED

//_.pad([string=''],[length=0],[chars=' '])
let pad1 = _.pad('abc', 8);
console.log('pad1--->', pad1);
//pad1--->   abc
let pad2 = _.pad('abc', 8, '_-');
console.log('pad2-->', pad2);
//pad2--> _-abc_-_
let pad3 = _.pad('abc', 3);
console.log('pad3--->', pad3);
//pad3---> abc

//_.padEnd([string=''],[length=0],[chars=''])
let padEnd1 = _.padEnd('abc', 6);
console.log('padEnd1--->', padEnd1);
//padEnd1---> abc
let padEnd2 = _.padEnd('abc', 6, '_-');
console.log('padEnd2--->', padEnd2);
//padEnd2---> abc_-_
let padEnd3 = _.padEnd('abc', 3);
console.log('padEnd3--->', padEnd3);
//padEnd3---> abc

//_.padStart([string=''],[length=0],[chars=' '])
let padStart1 = _.padStart('abc', 6);
console.log('padStart1--->', padStart1);
//padStart1--->    abc
let padStart2 = _.padStart('abc', 6, '_-');
console.log('padStart2--->', padStart2);
//padStart2---> _-_abc
let padStart3 = _.padStart('abc', 3);
console.log('padStart3--->', padStart3);
//padStart3---> abc

//_.parseInt(string,[redix=10])
let parseInt1 = _.parseInt('08');
console.log('parseInt1--->', parseInt1);
//parseInt1---> 8
let parseInt2 = _.map(['6', '08', '10'], _.parseInt);
console.log('parseInt2--->', parseInt2);
//parseInt2---> [ 6, 8, 10 ]

//_.repeat([string=''],[n=1])
let repeat1 = _.repeat('*', 3);
console.log('repeat1--->', repeat1);
//repeat1---> ***
let repeat2 = _.repeat('abc', 2);
console.log('repeat2--->', repeat2);
//repeat2---> abcabc
let repeat3 = _.repeat('abc', 0);
console.log('repeat3--->', repeat3);
//repeat3--->

//_.replace([string=''],pattern,replacement)
let replace1 = _.replace('Hi Fred', 'Fred', 'Barney');
console.log('replace1--->', replace1);
//replace1---> Hi Barney

//_.snakeCase([string=''])
let snakeCase1 = _.snakeCase('Foo Bar');
console.log('snakeCase1--->', snakeCase1);
//snakeCase1---> foo_bar
let snakeCase2 = _.snakeCase('fooBar');
console.log('snakeCase2--->', snakeCase2);
//snakeCase2---> foo_bar
let snakeCase3 = _.snakeCase('--FOO-BAR--');
console.log('snakeCase3--->', snakeCase3);
//snakeCase3---> foo_bar

// _.split([string=''],separator,[limit])
let split1 = _.split('a-b-c', '-', 2);
console.log('split1--->', split1);
//split1---> [ 'a', 'b' ]

//_.startCase([string=''])
let startCase1 = _.startCase('--foo-bar--');
console.log('startCase1--->', startCase1);
//startCase1---> Foo Bar
let startCase2 = _.startCase('fooBar');
console.log('startCase2--->', startCase2);
//startCase2---> Foo Bar
let startCase3 = _.startCase('__FOO_BAR__');
console.log('startCase3--->', startCase3);
//startCase3---> FOO BAR

// _.startsWith([string=''],[target],[position=0])
let startsWith1 = _.startsWith('abc', 'a');
console.log('startsWith1--->', startsWith1);
//startsWith1---> true
let startsWith2 = _.startsWith('abc', 'b');
console.log('startsWith2--->', startsWith2);
//startsWith2---> false
let startsWith3 = _.startsWith('abc', 'b', 1);
console.log('startsWith3--->', startsWith3);
//startsWith3---> true

// _.template([string=''],[options={}])
// Use the "interpolate" delimiter to create a compiled template.
var compiled = _.template('hello <%= user%>!');
let compiled1 = compiled({ 'user': 'fred' });
console.log('compiled1--->', compiled1);
//compiled1---> hello fred!

// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
var compiled2 = _.template('<% _.forEach(users, function(user){ %><li><%- user %></li><% }); %>');
var compiled2_1 = compiled2({ 'users': ['fred', 'barney'] });
console.log('compiled2_1--->', compiled2_1);
//compiled2_1---> <li>fred</li><li>barney</li>

// Use the HTML "escape" delimiter to escape data property values.
var compiled3 = _.template('<b><%- value %></b>');
var compiled3_1 = compiled3({ 'value': '<script>' });
console.log('compiled3_1--->', compiled3_1);
//compiled3_1---> <b>&lt;script&gt;</b>

//_.toLower([string=''])
let toLower1 = _.toLower('--Foo-Bar---');
console.log('toLower1--->', toLower1);
//toLower1---> --foo-bar---
let toLower2 = _.toLower('fooBar');
console.log('toLower2--->', toLower2);
//toLower2---> foobar
let toLower3 = _.toLower('__FOO_BAR__');
console.log('toLower3--->', toLower3);
//toLower3---> __foo_bar__

//_.toUpper([string=''])
let toUpper1 = _.toUpper('--foo-bar--');
console.log('toUpper1--->', toUpper1);
//toUpper1---> --FOO-BAR--
let toUpper2 = _.toUpper('fooBar');
console.log('toUpper2--->', toUpper2);
//toUpper2---> FOOBAR
let toUpper3 = _.toUpper('__foo_bar__');
console.log('toUpper3--->', toUpper3);
//toUpper3---> __FOO_BAR__

// _.trim([string=''],[chars=whitespace])
let trim1 = _.trim(' abc ');
console.log('trim1--->', trim1);
//trim1---> abc
let trim2 = _.trim('-_-abc-_-', '_-');
console.log('trim2--->', trim2);
//trim2---> abc
let trim3 = _.map([' foo ', ' bar '], _.trim);
console.log('trim3--->', trim3);
//trim3---> [ 'foo', 'bar' ]

//_.trimEnd([string=''],[chars=whitespace])
let trimEnd1 = _.trimEnd(' abc ');
console.log('trimEnd1--->', trimEnd1);
//trimEnd1--->  abc
let trimEnd2 = _.trimEnd('-_-abc-_-', '_-');
console.log('trimEnd2--->', trimEnd2);
//trimEnd2---> -_-abc

//_.trimStart([string=''],[chars=whitespace])
let trimStart1 = _.trimStart(' abc ');
console.log('trimStart1--->', trimStart1);
//trimStart1---> abc
let trimStart2 = _.trimStart('-_-abc-_-', '_-');
console.log('trimStart2--->', trimStart2);
//trimStart2---> abc-_-

//_.truncate([string=''],[options={}])
let truncate1 = _.truncate('hi-diddly-ho there, neighborino');
console.log('truncate1--->', truncate1);
//truncate1---> hi-diddly-ho there, neighbo...
let truncate2 = _.truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': ' '
});
console.log('truncate2--->', truncate2);
//truncate2---> hi-diddly-ho there,...
let truncate3 = _.truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': /,? +/
});
console.log('truncate3--->', truncate3);
//truncate3---> hi-diddly-ho there...
let truncate4 = _.truncate('hi-diddly-ho there, neighborino', {
    'omission': ' [...]'
});
console.log('truncate4--->', truncate4);
//truncate4---> hi-diddly-ho there, neig [...]

//_.unescape([string=''])
let unescape1 = _.unescape('fred, barney, &amp; pebbles');
console.log('unescape1--->', unescape1);
//unescape1---> fred, barney, & pebbles

//_.upperCase([string=''])
let upperCase1 = _.upperCase('--foo-bar');
console.log('upperCase1--->', upperCase1);
//upperCase1---> FOO BAR
let upperCase2 = _.upperCase('fooBar');
console.log('upperCase2--->', upperCase2);
//upperCase2---> FOO BAR
let upperCase3 = _.upperCase('__foo_bar__');
console.log('upperCase3--->', upperCase3);
//upperCase3---> FOO BAR

//_.upperFirst([string=''])
let upperFirst1 = _.upperFirst('fred');
console.log('upperFirst1--->', upperFirst1);
//upperFirst1---> Fred
let upperFirst2 = _.upperFirst('FRED');
console.log('upperFirst2--->', upperFirst2);
//upperFirst2---> FRED

//_.words([string=''],[pattern])
let words1 = _.words('fred, barney, & pebbles');
console.log('words1--->', words1);
//words1---> [ 'fred', 'barney', 'pebbles' ]
let words2 = _.words('fred, barney, & pebbles', /[^, ]+/g);
console.log('words2--->', words2);
//words2---> [ 'fred', 'barney', '&', 'pebbles' ]





















