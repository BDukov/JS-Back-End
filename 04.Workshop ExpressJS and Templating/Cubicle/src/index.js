const express = require('express');
const hendlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 5000;

//express config
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

//handlebars setup
app.engine('hbs', hendlebars.engine({
    extname: 'hbs',
  //  layoutsDir: 'src/views/layouts',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');
//routes

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () =>{
    console.log('Server is running on port: ' + PORT);     
});