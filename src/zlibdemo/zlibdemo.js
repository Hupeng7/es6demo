"use strict";

const zlib = require('zlib');

const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('file');
const out = fs.createWriteStream('file.gz');
inp.pipe(gzip).pipe(out)