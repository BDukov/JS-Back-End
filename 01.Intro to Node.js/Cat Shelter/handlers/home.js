const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');
const breeds = require('../data/breeds');

module.exports = (req, res) => {
    const pathname = urs.parse(req.url).pathname;

    if (pathname == '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homeView);
    }
}