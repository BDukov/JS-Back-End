const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const { auth } = require('./middlewares/authMiddleware');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/furnitures')
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(auth);

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // * - all domains
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// })

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(routes);

app.listen(3030, () => {
    console.log('RESTful Server is listening on port 3030!');
});