#!/usr/bin/node
function countStudents(path) {
    const fs = require('fs');
    try {
        const data = fs.readFileSync(path, 'utf8').trim().split('\n');
        const NUMBER_OF_STUDENTS = data.length - 1;
        console.log('Number of students: ' + NUMBER_OF_STUDENTS);
        let fields = {};
        for (const line of data.slice(1)) {
            const student = line.split(',');
            if (fields[student[3]]) {
                fields[student[3]].push(student[0]);
            } else {
                fields[student[3]] = [student[0]];
            }
        }
        for (const field of Object.keys(fields)) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

