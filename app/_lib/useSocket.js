import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const socket = io({ autoConnect: false })

export default function useSocket() {
  const [isConnected, setIsConnected] = useState(false)

  const onConnect = () => setIsConnected(true)
  const onDisconnect = () => setIsConnected(false)

  useEffect(() => {
    if (socket.connected) onConnect()
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  return { isConnected }
}
