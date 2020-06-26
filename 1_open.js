const fs = require('fs')

// асинхронный
fs.open('template.text', 'r', (err, fd) => {
    if (err) throw err;
    //fd - это дескриптор файла
    console.log(fd)

    // код работы с файлами

    // закрывайте дескрипторы после работы!
    fs.close(fd, (err) => {
        if (err) throw err;
    });
})

let fd
// синхронный
try {
  fd = fs.openSync('template.text', 'r')
  console.log(fd)
} catch (err) {
  console.error(err)
}finally {
  if (fd !== undefined)
    fs.closeSync(fd);
}