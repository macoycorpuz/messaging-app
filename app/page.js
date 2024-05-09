'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef } from 'react'
import { socket } from './_lib/socket'

export default function Home() {
  const usernameRef = useRef()
  const router = useRouter()

  const onSubmit = (e) => {
    e.preventDefault()

    const username = usernameRef.current.value
    socket.auth = { username }
    socket.connect()
  }

  useEffect(() => {
    socket.on('connect_error', (err) => {
      alert(err.message)
    })

    socket.on('login', () => {
      router.push('/chat')
    })

    return () => {
      socket.off('connect_error')
      socket.off('login')
    }
  }, [router])

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="py-4 text-center text-2xl uppercase">messaging app</h1>
        <form className="flex flex-col pb-4" onSubmit={onSubmit}>
          <label htmlFor="username">Choose your username</label>
          <div className="mt-2">
            <input
              ref={usernameRef}
              id="username"
              name="username"
              autoComplete="username"
              className="w-full rounded-md p-2 shadow-sm ring-1 ring-inset"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-sky-500 p-2.5 text-white hover:bg-sky-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
