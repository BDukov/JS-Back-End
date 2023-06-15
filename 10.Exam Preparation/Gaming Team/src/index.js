const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const port = 3000;

const { auth } = require('./middlewares/authMiddleware');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware');
const routes = require('./routes');

const app = express();

//Add handlebars as template engine
app.engine('hbs', handlebars.engine({ 
    extname: 'hbs' 
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Connect to MongoDB
//change db name
mongoose.connect(`mongodb://127.0.0.1:27017/game`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('DB ERROR: ', err.message));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port 5000`));