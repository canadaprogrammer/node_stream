const fs = require('fs')
const zlib = require('zlib')

const file = process.argv[2]

const start = new Date()

// // buffering
// fs.readFile(file, (err, buffer) =>{
//   console.log('file: ', file, 'err: ', err, 'start: ', start)
//   zlib.gzip(buffer, (err, buffer) => {
//     fs.writeFile(file + '.gz', buffer, err => {
//       console.log('File Successfully compressed')
//       console.log('end: ', (new Date()) - start)
//     })
//   })
// })

// streaming - possible to work on big file
fs.createReadStream(file)
  .on('open', () => console.log('start: ', start))
  // automatically error throw
  // .on('error', (err) => console.log('error: ', err))
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('File successfully compressed', 'duration: ', (new Date()) - start))
