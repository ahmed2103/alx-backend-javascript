#!/usr/bin/node

const readDatabase = require('../utils');
const path = process.argv[2];

class StudentsController {
    static getAllStudents(request, response) {
        readDatabase(path)
            .then((students) => {
                let output = 'This is the list of our students';
                for (const field in students) {
                    output += `\nNumber of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
                }
                response.status(200).send(output);
            })
            .catch(() => {
                response.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(request, response) {
        const major = request.params.major;
        if (major !== 'CS' && major !== 'SWE') {
            return response.status(500).send('Major parameter must be CS or SWE');
        }

        readDatabase(path)
            .then((students) => {
                if (!students[major]) {
                    return response.status(500).send('Major parameter must be CS or SWE');
                }
                response.status(200).send(`List: ${students[major].join(', ')}`);
            })
            .catch(() => {
                response.status(500).send('Cannot load the database');
            });
    }
}

module.exports = {StudentsController, getAllStudentsByMajor};
