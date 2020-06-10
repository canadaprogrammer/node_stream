# Stream

## Readable Stream [(Document)](https://nodejs.org/api/stream.html#stream_readable_streams])

### Read from stream

getting data from Readable steam
- non-flow mode: using readable event and read() method
- flow mode: using data event
- `$ cat <path to a file> | node readStdin`

### Implement Readable Stream

using readable stream for reading strings from random string generator
- randomStream.js generates random strings
- generateRandom.js reads the strings
- `$ node generateRandom`

## Writable Stream [(Document)](https://nodejs.org/api/stream.html#stream_writable_streams])

### Write data on stream

writing data on stream by using writable steam
- writable.write(chunk, [encoding], [callback])
  - encoding: default 'utf8', The encoding if chunk is a string
- `$ node entropyServer`
- `$ curl localhost:8080` or url 'http://localhost:8080' on a browser

### Back-pressure

buffering data for preventing a bottleneck

### Implement Writable Stream

- `$ node writeToFile`

## Duplex Stream

It can Readable and Writable.
It's useful to handle that has both of data source and data destination like socket.
Simple duplex stream doesn't have direct relationship between readable stream and writable stream.
Transform stream transforms from writable stream to readable stream

### Implement Transform Stream

- `$ node replaceStreamTest`

### Using pipe

- `$ echo Hello World! | node replace World Node.js`