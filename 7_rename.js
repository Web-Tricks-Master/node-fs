const fs = require('fs')

// переименовываем файла
fs.rename('oldFile.txt', 'newFile.txt', (err) => {
    if (err) throw err;
    console.log('Файл переименован');
});

// переименовываем директорию
try {
    fs.renameSync('./oldDir', './newDir')
    console.log('Папка переименован');
} catch (error) {
      console.error(error)
}