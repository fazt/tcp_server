const net = require('net');

let server = undefined;
// Argument is an instance of a socket
// listenning for incomming connections
server = net.createServer( socket => {
  console.dir('New socket Connected', {colors: true});

  socket.on('data', data => {
    console.log(
      `${data} from ${socket.remoteAddress}:${socket.remotePort}`
    );
    socket.write('Repeating: '+data);
  });

  socket.on('close',function(){
    console.log('Socket disconnected.');
  });

}, {
  // if it's true don't send a FIN package
  // keeps the socket open for writing not reading
  // , false is the default
  allowHalfOpen: false
});

server.listen(8124, () => {
  console.log('escuchando en puerto 8124');
});
