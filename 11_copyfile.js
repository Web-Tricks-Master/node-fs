const fs = require('fs')

fs.copyFile('oldFile.txt', 'oldFileTwo.txt', (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Файл успешно копирован')
});

try {
    fs.copyFileSync('oldFile.txt', 'oldFileTwo.txt')
    console.log('Файл успешно копирован')
} catch (error) {
    console.error(error)
}