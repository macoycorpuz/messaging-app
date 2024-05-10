import { useEffect, useRef, useState } from 'react'
import { BackButton } from './_components/BackButton'
import { MessageBox } from './_components/MessageBox'
import { usersData } from './mockData'

export default function ChatPanel({ otherUserId, onBack }) {
  const inputRef = useRef()
  const messageEnd = useRef()
  const [otherUsername, setOtherUsername] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    messageEnd.current.scrollIntoView({ behaviour: 'smooth' })
  })

  useEffect(() => {
    const { username } = usersData.filter((d) => d.id === otherUserId)[0] || {}
    setOtherUsername(username)
  }, [otherUserId])

  const onSend = () => {
    const message = inputRef.current?.value
    setMessages((prev) => [...prev, { message, author: 'me' }])
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  const onEnter = (e) => {
    if (e.key !== 'Enter' || !inputRef.current?.value.trim().length) return
    onSend()
    e.preventDefault()
  }

  return (
    <div className="grid flex-1 grid-rows-[auto-1fr] overflow-hidden">
      <header className="flex h-20 items-center gap-4 border-b-2 px-2 md:px-6">
        <BackButton onBack={onBack} />
        <div className="space-y-0">
          <h1 className="text-2xl">{otherUsername}</h1>
          <span className="text-xs text-gray-500">Active now</span>
        </div>
      </header>

      <main className="grid grid-rows-[1fr_6rem] overflow-hidden">
        <div className="flex h-[calc(100dvh-6rem-5rem)] flex-col gap-2 overflow-y-auto p-2">
          {messages.map((d, i) => (
            <MessageBox key={i} author={d.author}>
              {d.message}
            </MessageBox>
          ))}
          <div ref={messageEnd}></div>
        </div>
        <form onSubmit={onSend} className="flex h-24 w-full gap-2 px-4 pb-4">
          <textarea
            ref={inputRef}
            className="flex-1 rounded-md border border-gray-500 p-4"
            placeholder="Type a message..."
            onKeyDown={onEnter}
          ></textarea>
          <button
            type="submit"
            className="rounded-lg border-2 border-gray-900 bg-gray-600 p-6 text-white disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  )
}
