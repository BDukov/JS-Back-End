const qs = require('querystring');
const is = require('is');
const http = require('http');
console.log(is.even(2));


const myURL = new URL('https://example.org/?abc=123');
const quS = qs.parse(myURL.search);
console.log(quS);