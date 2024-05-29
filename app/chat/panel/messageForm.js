import { useRef } from 'react'

export const MessageForm = ({ onSend, onFocus }) => {
  const inputRef = useRef()

  const onUpdateMessage = () => {
    const message = inputRef.current?.value
    onSend(message)
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onUpdateMessage()
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (inputRef.current?.value.trim().length) {
        onUpdateMessage()
      }
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex h-24 w-full gap-2 px-4 pb-4">
      <textarea
        ref={inputRef}
        className="flex-1 rounded-md border border-gray-500 p-4"
        placeholder="Type a message..."
        onKeyDown={onEnter}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
      ></textarea>
      <button
        type="submit"
        className="rounded-lg border-2 border-gray-900 bg-gray-600 p-6 text-white disabled:opacity-50"
      >
        Send
      </button>
    </form>
  )
}
