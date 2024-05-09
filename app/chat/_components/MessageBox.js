export const MessageBox = ({ children, author = 'me' }) => {
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
