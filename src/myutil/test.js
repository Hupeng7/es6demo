"use strict";


const moment = require('moment');
const authentication = require('./authentication');

var token = authentication.createToken('helloworld');
console.log('token---', token);

var verifyToken = authentication.verifyToken(token);
console.log('verifyToken---', verifyToken);
console.log('verifyToken---', moment(verifyToken.iat).format('YYYY-MM-DD HH:mm:ss'));
console.log('verifyToken---', moment(verifyToken.exp).format('YYYY-MM-DD HH:mm:ss'));