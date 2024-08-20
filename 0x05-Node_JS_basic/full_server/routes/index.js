#!/usr/bin/node

const StudentsController = require('../controllers/StudentsController');
const app = require('../server');

app.get('/', StudentsController.getAllStudents);
app.get('/students', StudentsController.getAllStudents);


