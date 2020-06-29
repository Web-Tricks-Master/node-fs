const fs = require('fs')
const content = 'Новый текст'

fs.writeFile('newText.txt', content, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('файл успешно перезаписан')
})

try {
    fs.writeFileSync('newTextTwo.txt', content)
    console.log('файл успешно перезаписан')
} catch (err) {
    console.error(err)
}
   
