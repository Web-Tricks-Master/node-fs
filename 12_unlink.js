const fs = require('fs')

fs.unlink('file.txt', (err) => {
    if (err) throw err;
    console.log('Файл успешно удален');
});

try {
    fs.unlinkSync('file.txt')
    console.log('Файл успешно удален');
} catch (error) {
    console.error(error)
}