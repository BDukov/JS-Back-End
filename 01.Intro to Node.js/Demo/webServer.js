const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server is called...');

    console.log(req.method);
    console.log(req.url);

    // res.writeHead(201, {
    //     'Content=Type': 'text/html'
    // });
    res.write('<h1>Hello from NodeJS Server!</h1>');
    res.end();
});

server.listen(5000);

