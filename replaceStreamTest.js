const ReplaceStream = require('./replaceSteam')

const rs = new ReplaceStream('World', 'Node.js')
rs.on('data', chunk => console.log('chunk: ', chunk.toString()))

rs.write('Hello W')
rs.write('orld!')
rs.end()
