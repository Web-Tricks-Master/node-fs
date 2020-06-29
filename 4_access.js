const fs = require('fs')
const file = 'package.json';

// проверка существования файла
fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'не существует' : 'существует'}`);
});

// проверка на возможность прочитать файл
fs.access(file, fs.constants.R_OK, (err) => {
    console.log(`${file} ${err ? 'не прочитать' : 'прочитать'}`);
});
  
// проверка на возможность перезаписать файл
fs.access(file, fs.constants.W_OK, (err) => {
    console.log(`${file} ${err ? 'не перезаписать' : 'перезаписать'}`);
});