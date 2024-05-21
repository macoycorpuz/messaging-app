import { useEffect, useRef, useState } from 'react'
import { MessageBox } from './messageBox'
import { usersData } from '../_mock/mockData'
import { Header } from './header'

export default function ChatPanel({ otherUserId, onBack }) {
  const inputRef = useRef()
  const messageEnd = useRef()
  const [otherUsername, setOtherUsername] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const { username } = usersData.filter((d) => d.id === otherUserId)[0] || {}
    setOtherUsername(username)
  }, [otherUserId])

  const onUpdateMessages = () => {
    const message = inputRef.current?.value
    setMessages((prev) => [...prev, { message, author: 'me' }])
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onUpdateMessages()
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (inputRef.current?.value.trim().length) {
        onUpdateMessages()
      }
    }
  }

  return (
    <div className="grid flex-1 grid-rows-[auto-1fr] overflow-hidden">
      <Header username={otherUsername} status="Active now" onBack={onBack} />
      <main className="grid grid-rows-[1fr_6rem] overflow-hidden">
        <div className="flex h-[calc(100dvh-6rem-5rem)] flex-col gap-2 overflow-y-auto p-2">
          {messages.map((d, i) => (
            <MessageBox key={i} author={d.author}>
              {d.message}
            </MessageBox>
          ))}
          <div ref={messageEnd}></div>
        </div>
        <form onSubmit={onSubmit} className="flex h-24 w-full gap-2 px-4 pb-4">
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
