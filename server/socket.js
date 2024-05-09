const { Server } = require('socket.io')

const onHandShake = (socket, next) => {
  const username = socket.handshake.auth.username

  if (!username) {
    return next(new Error('Username is required'))
  }

  if (username.length < 3) {
    return next(new Error('Username should be 3 or more characters'))
  }

  socket.username = username
  socket.emit('login')
  next()
}

module.exports = function socket(httpServer) {
  const io = new Server(httpServer)
  io.use(onHandShake)
}
