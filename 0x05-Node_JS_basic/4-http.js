#!/usr/bin/node
const http = require('http');

app = http.createServer((req, res) => {
    res.end('Hello Holberton School!');
});

app.listen(1245);
