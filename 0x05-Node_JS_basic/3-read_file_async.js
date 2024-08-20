#!/usr/bin/node
function countStudents(path) {
  const fs = require('fs');
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const NUMBER_OF_STUDENTS = lines.length - 1;
      const fields = {};
      for (const line of lines.slice(1)) {
        const student = line.split(',');
        if (fields[student[3]]) {
          fields[student[3]].push(student[0]);
        } else {
          fields[student[3]] = [student[0]];
        }
      }
      let output = `Number of students: ${NUMBER_OF_STUDENTS}`;
      for (const field of Object.keys(fields)) {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }
      resolve(output);
      process.stdout.write(output);
    });
  });
}

module.exports = countStudents;
