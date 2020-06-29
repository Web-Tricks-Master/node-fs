const fs = require('fs')

// асинхронное
fs.readFile('template.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
})

// синхронное
try {
    const data = fs.readFileSync('template.txt', 'utf-8')
    console.log(data)
} catch (err) {
    console.error(err)
}