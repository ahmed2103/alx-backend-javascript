#!/usr/bin/node
const express = require('express');
const path = process.argv[2];

const app = express();

app.listen(1245, () => {});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const countStudents = require('./3-read_file_async');
    countStudents(path)
        .then((data) => res.send(`This is the list of our students\n${data}`))
        .catch((error) => res.send(error.message));
});
