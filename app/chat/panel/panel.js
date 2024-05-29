import { useEffect, useRef, useState } from 'react'
import { MessageBox } from './messageBox'
import { usersData } from '../_mock/mockData'
import { Header } from './header'
import { MessageForm } from './messageForm'

export default function ChatPanel({ otherUserId, onBack }) {
  const messageEnd = useRef()
  const [otherUsername, setOtherUsername] = useState('')
  const [messages, setMessages] = useState([])
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  useEffect(() => {
    const { username } = usersData.filter((d) => d.id === otherUserId)[0] || {}
    setOtherUsername(username)
  }, [otherUserId])

  const onSend = (message) => {
    setMessages((prev) => [...prev, { message, author: 'me' }])
  }

  return (
    <div className="grid flex-1 grid-rows-[auto-1fr] overflow-hidden">
      <Header username={otherUsername} status="Active now" onBack={onBack} />
      <main className="grid grid-rows-[1fr_6rem] overflow-hidden">
        <div
          // className={`flex flex-col gap-2 overflow-y-auto p-2 ${isKeyboardVisible ? 'h-[calc(100dvh-6rem-5rem)-50%]' : 'h-[calc(100dvh-6rem-5rem)]'}`}
          className={`flex h-[calc(100dvh-6rem-5rem)-50%] flex-col gap-2 overflow-y-auto p-2`}
        >
          {messages.map((d, i) => (
            <MessageBox key={i} author={d.author}>
              {d.message}
            </MessageBox>
          ))}
          <div ref={messageEnd}></div>
        </div>
        <MessageForm onSend={onSend} onFocus={setIsKeyboardVisible} />
      </main>
    </div>
  )
}
