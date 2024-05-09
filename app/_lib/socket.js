import { io } from 'socket.io-client'

export const socket = io({ autoConnect: false })

if (process.env.NODE_ENV !== 'production') {
  socket.onAny((event, ...args) => {
    console.log('[socket]', event, args)
  })
}
