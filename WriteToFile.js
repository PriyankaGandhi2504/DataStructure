const fs = require('fs')
var data = "Nory was a Catholic because her mother was a Catholic, and Nory’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been."
fs.writeFile ('InputFile.txt',data,(err) => {
console.log(data)
})