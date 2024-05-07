import Chatbox from './chatbox'

export default function Chat() {
  return (
    <div className="grid min-h-screen grid-rows-[auto-1fr] overflow-hidden">
      <header className="flex h-20 w-full items-center justify-center bg-sky-600 p-4">
        <h1 className="text-3xl text-white">Realtime Chat</h1>
      </header>
      <Chatbox />
    </div>
  )
}
