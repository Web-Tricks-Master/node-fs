const path = require('path')

const file = '/temp/template.txt'

console.log(path.basename(file))
console.log(path.basename(file, '.txt'))
console.log(path.dirname(file))
console.log(path.extname(file))