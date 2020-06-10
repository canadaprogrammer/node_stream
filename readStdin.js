process.stdin
  // // non-flowing mode
  // .on('readable', () => {
  //   let chunk
  //   console.log('New data available')
  //   while((chunk = process.stdin.read()) !== null) {
  //     console.log(`Chunk read: (${chunk.length})\n "${chunk.toString()}"`)
  //   }
  // })
  // flowing mode
  .on('data', chunk => {
    console.log('New data available')
    console.log(`Chunk read: (${chunk.length})\n "${chunk.toString()}"`)
  })
  .on('end', () => process.stdout.write('End of stream\n'))