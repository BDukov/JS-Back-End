const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cats/add-breed', (req, res) => {
    res.render('addBreed');
});

app.get('/cats/add-cat', (req, res) => {
    res.render('addCat');
});

app.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
});