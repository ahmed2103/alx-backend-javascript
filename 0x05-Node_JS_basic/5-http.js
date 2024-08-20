#!/usr/bin/node
const http = require('http');
path = process.argv[2];

app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    }
    if (req.url === '/students') {
    const countStudents = require('./3-read_file_async');
    countStudents(path).then((data) => {
        res.end(`This is the list of our students\n${data}`);
    }).catch((error) => {
        res.end(error.message);
    });
    }
});
app.listen(1245);

module.exports = app;
