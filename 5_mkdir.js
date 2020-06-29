const fs = require('fs')
const dir = '/temp/test'

// создание новой директории
fs.mkdir(__dirname + dir, { recursive: true }, (err) => {
    if (err) {
        console.error(err)
        return
    }
})


if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(__dirname + dir, { recursive: true })
    } catch (error) {
        console.error(error)
    }
} else {
    console.log('Папка существует')
}