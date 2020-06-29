const path = require('path')

const div = '/temp/template.txt'

console.log(path.basename(div))
console.log(path.basename(div, '.txt'))
console.log(path.dirname(div))
console.log(path.extname(div))

const folderName = 'temp'

// join
console.log(path.join('/', folderName, 'template.txt'))

// resolve
console.log(path.resolve('template.txt'))
console.log(path.resolve(folderName, 'template.txt'))
console.log(path.resolve('/temp', 'template.txt'))

// normalize
console.log(path.normalize('users/../temp/template.txt'))