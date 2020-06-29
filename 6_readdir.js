
const fs = require('fs')
const dir =  __dirname + '/'

fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(files)
})

try {
    const files = fs.readdirSync(dir)
    console.log(files)
} catch (error) {
      console.error(error)
}