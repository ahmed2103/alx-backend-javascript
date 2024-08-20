#!/usr/bin/node
function readDatabase(path) {
  const readFile = require('fs').readFile;
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const dict = {};
        for (const line of lines.slice(1)) {
          const [firstname, lastname, age, field] = line.split(',');
          if (!dict[field]) dict[field] = [];
          else dict[field].push(firstname);
        }
        resolve(dict);
      }
    });
  });
}

module.exports = { readDatabase };
