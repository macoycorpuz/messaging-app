'use client'
import { useEffect, useRef, useState } from 'react'
import { mockMessages } from '../_lib/mockMessages'

const Message = ({ children, author = 'me' }) => {
  const isMe = author === 'me'

  return (
    <div className={`flex grow-0${isMe ? 'ml-32 justify-end' : 'mr-32'}`}>
      <span
        className={`rounded-lg p-2 text-white ${isMe ? 'bg-sky-600' : 'bg-gray-400'}`}
      >
        {children}
      </span>
    </div>
  )
}

export default function Chatbox() {
  const messageEnd = useRef(null)
  const [messages, setMessages] = useState(mockMessages)

  useEffect(() => {
    if (!messageEnd) messageEnd.scrollIntoView({ behaviour: 'smooth' })
  })

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
      <form className="flex h-24 w-full">
        <textarea
          className="flex-1 p-4"
          placeholder="Type a message..."
        ></textarea>
        <button className="bg-sky-600 p-6 text-white">Send</button>
      </form>
    </main>
  )
}
