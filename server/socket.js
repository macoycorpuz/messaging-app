const { Server } = require('socket.io')

const onSendMessage = () => {}

const onConnect = (socket) => {
  console.log('connection up')
  socket.on('send message', () => {})
}

module.exports = function socket(httpServer) {
  const io = new Server(httpServer)
  io.on('connection', onConnect)
}
