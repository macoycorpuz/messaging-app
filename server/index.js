const { createServer } = require('http')
const next = require('next')
const socket = require('./socket')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({ dev, hostname, port })
const handler = app.getRequestHandler()

const onError = (err) => {
  console.error(err)
  process.exit(1)
}

const onListen = () => {
  console.log(`> Ready on http://${hostname}:${port}`)
}

app.prepare().then(() => {
  const httpServer = createServer(handler)
  socket(httpServer)
  httpServer.once('error', onError).listen(port, onListen)
})
