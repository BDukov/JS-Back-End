const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

function expressConfig(app){
    app.use(express.static(path.join(__dirname, '../static')));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
}

module.exports = expressConfig;