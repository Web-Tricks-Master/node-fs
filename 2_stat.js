const fs = require('fs')

// асинхронный
fs.stat('template.text', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }
    // console.log(stats)
})

// синхронный
try {
  const stats = fs.statSync('template.text')
  // console.log(stats)
} catch (err) {
  console.error(err)
}

// методы и свойства
fs.stat('template.text', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(stats.isDirectory())
    console.log(stats.isFile())
    console.log(stats.isSocket())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
    console.log(stats.mode)
    console.log(stats.birthtime)
})