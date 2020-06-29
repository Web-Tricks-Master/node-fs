const fs = require('fs')

fs.rmdir(__dirname +'/testDel', () => { 
    console.log('Файл успешно удален')
})

try {
    fs.rmdirSync(__dirname + '/testDel')
    console.log('Файл успешно удален')
} catch (error) {
    console.error(error)
}