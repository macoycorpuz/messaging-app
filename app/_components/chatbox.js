'use client'
import { useEffect, useRef, useState } from 'react'
import useSocket from '../_lib/useSocket'

const Message = ({ children, author = 'me' }) => {
  const isMe = author === 'me'

  return (
    <div className={`flex ${isMe ? 'ml-32 justify-end' : 'mr-32'}`}>
      <span
        className={`rounded-lg p-2 text-white ${isMe ? 'bg-sky-600' : 'bg-gray-400'}`}
      >
        {children}
      </span>
    </div>
  )
}

export default function Chatbox() {
  const inputRef = useRef()
  const messageEnd = useRef()
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const { isConnected } = useSocket()

  const isMessageEmpty = !message.trim().length

  useEffect(() => {
    messageEnd.current.scrollIntoView({ behaviour: 'smooth' })
  })

  const onInput = (e) => setMessage(e.target.value)

  const onSend = () => {
    setMessages((prev) => [...prev, { message, author: 'me' }])
    setMessage('')
    inputRef.current.focus()
  }

  const onEnter = (e) => {
    if (e.key !== 'Enter' || isMessageEmpty) return
    onSend()
    e.preventDefault()
  }

  return (
    <main className="grid grid-rows-[1fr_6rem] overflow-hidden bg-gray-100">
      <div className="flex h-[calc(100vh-6rem-5rem)] flex-col gap-2 overflow-y-auto p-2">
        {messages.map((d, i) => (
          <Message key={i} author={d.author}>
            {d.message}
          </Message>
        ))}
        <div ref={messageEnd}></div>
      </div>
      <form onSubmit={onSend} className="flex h-24 w-full gap-2 px-4 pb-4">
        <textarea
          ref={inputRef}
          value={message}
          className="flex-1 rounded-md border border-sky-500 p-4"
          placeholder="Type a message..."
          onInput={onInput}
          onKeyDown={onEnter}
        ></textarea>
        <button
          type="submit"
          className="rounded-lg border-2 border-sky-900 bg-sky-600 p-6 text-white disabled:opacity-50"
          disabled={isMessageEmpty}
        >
          Send
        </button>
      </form>
    </main>
  )
}
