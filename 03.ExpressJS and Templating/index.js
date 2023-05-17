const express = require('express');
const path = require('path');

const app = express();

//add third party middleware
const bodyParser = express.urlencoded({extended: false})
app.use(bodyParser);


//add middlewares

app.use((req, res, next) => {
    console.log(`middleware 1`);
    next();
});

app.use((req, res, next) => {
    console.log(`HTTP Request: ${req.method}: ${req.path}`);
    next();
});

// Partial Route middleware

app.use('/cats', (req, res, next) => {
    console.log(`Cat middleware`);
    next();
});

// Routre specific middleware

const specificMiddleware =  (req, res, next) => {
    console.log(`Specific middleware`);
    next();
};

app.get('/specific', specificMiddleware, (reg, res) => {
    res.send('Some specific route with middleware');
});


//EXpress router /actions

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/cats/:catId', (req, res) => {
    console.log(req.params);
    res.send(`Request with parameter ${req.params.catId}`);
});

app.get('/cats', (req, res) => {
    res.send('Meow');
});

app.post('/cats', (req, res) => {
    res.status(201).send('Cats can be created with this endpoint');
});

app.get('/dogs', (req, res) => {
    res.send('Woof');
});

app.get('/download', (req, res) => {
    //res.download('./03. ExpressJS-and-Templating.pdf'); //it downloads the file
    res.sendFile(path.resolve(__dirname, '03. ExpressJS-and-Templating.pdf')); //it loads the file in the browser
    // res.attachment('./03. ExpressJS-and-Templating.pdf');  //it downloads the file
    // res.end(); //for attachment is needed
});

app.get('/old-route', (req, res) => {
    res.redirect('/cats');
});

app.get('/*', (req, res) => {
    res.status(404).send('404 Not Found');
});

//End of express router
app.listen(5000, () => console.log('Server running on port 5000'));