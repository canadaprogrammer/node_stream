const fs = require('fs')
const split = require('split')
const request = require('request')
// const ParallelStream = require('./parallelStream')
const LimitedParallelStream = require('./limitedParallelStream')

fs.createReadStream(process.argv[2])
  .pipe(split())
  // // using parallel stream
  // .pipe(new ParallelStream((url, enc, push, done) => {
  //   if (!url) return done()
  //   request.head(url, (err, res) => {
  //     push(`${url} is ${err ? 'down' : 'up'} \n`)
  //     done()
  //   })
  // }))

  // using limited parallel stream
  .pipe(new LimitedParallelStream(2, function (url, enc, done) {
    if (!url) return done()
    request.head(url, (err, res) => {
      this.push(`${url} is ${err ? 'down' : 'up'} \n`)
      done()
    })
  }))
  
  .pipe(fs.createWriteStream('resultsOfCheckUrls.txt'))
  .on('finish', () => console.log('All urls were checked'))