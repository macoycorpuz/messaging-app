export const Header = ({ username, status, onBack }) => {
  return (
    <header className="flex h-20 items-center gap-4 border-b-2 px-2 lg:px-6">
      <button
        onClick={onBack}
        className="cursor-pointer p-2 text-4xl font-semibold lg:hidden"
      >
        {'<'}
      </button>
      <div className="space-y-0">
        <h1 className="text-2xl">{username}</h1>
        <span className="text-xs text-gray-500">{status}</span>
      </div>
    </header>
  )
}
