'use client'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export default function Home() {
  const usernameRef = useRef()
  const router = useRouter()

  const onSubmit = (e) => {
    console.log(usernameRef.current.value)
    router.push('/chat')
    e.preventDefault()
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="py-4 text-center text-2xl uppercase">messaging app</h1>
        <form className="flex flex-col pb-4" onSubmit={onSubmit}>
          <label htmlFor="username">Choose your </label>
          <div className="mt-2">
            <input
              ref={usernameRef}
              id="username"
              name="username"
              required
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
