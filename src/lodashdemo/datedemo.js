"use strict";
var _ = require('lodash');

//_.now()
let now1 = _.defer(function (stamp) {
    console.log(_.now() - stamp);
}, _.now());
//