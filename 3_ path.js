const path = require('path')

const file = '/temp/template.txt'

console.log(path.basename(file))
console.log(path.basename(file, '.txt'))
console.log(path.dirname(file))
console.log(path.extname(file))

const folderName = 'temp'

// join
console.log(path.join('/', folderName, 'template.txt'))

// resolve
console.log(path.resolve('template.txt'))
console.log(path.resolve(folderName, 'template.txt'))
console.log(path.resolve('/temp', 'template.txt'))

