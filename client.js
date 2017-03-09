const net       = require('net');

let client   = new net.Socket();

// to read buffer as an unicode string
client.setEncoding('utf8');

client.connect('8124','localhost',() => {
  console.dir('connected to the server', {colors: true});
  console.log('who needs a browser to communicate?');
});

// when receives data frm server, print to console
client.on('data', data => {
  console.log(data);
});

client.on('close', () => {
  console.log('connection is closed.');
  process.exit(0);
});


// prepare for inputs from terminal
process.stdin.resume();

// when receive data from terminal, send to server
process.stdin.on('data', data => {
  client.write(data);
});
