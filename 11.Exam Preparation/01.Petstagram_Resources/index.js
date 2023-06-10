const express = require('express');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');

const app = express();

const port = 3000;

expressConfig(app);
handlebarsConfig(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.render('layouts/main.hbs');
    //res.render('/views/layouts/main.hbs');
});

app.use(routes);

app.listen(port, () => {
    `Server is running on port ${port}`
});