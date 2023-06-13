const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.use('/static', express.static('public')); // This will serve the files in the public folder at localhost:5000/static
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:27017/game`); ////todo change database name


app.listen(5000, () => console.log('Server started on port 5000'));