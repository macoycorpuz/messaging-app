import { useEffect, useState } from 'react'
import { Status } from './_components/Status'
import { usersData } from './_mock/mockData'

const NewMessageIcon = () => (
  <div className="h-2.5 w-2.5 rounded-full bg-sky-500"></div>
)

export default function Users({
  currentUserId,
  otherUserId,
  isOpen,
  onSelect,
  onClose,
}) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const sessionUsers = usersData.filter((d) => d.id !== currentUserId)
    setUsers(sessionUsers)
  }, [currentUserId])

  return (
    <div
      className={`absolute z-10 h-full w-full overflow-hidden bg-white sm:max-w-sm sm:border-r-2 lg:relative lg:border-gray-600 ${!isOpen && 'hidden lg:block'}`}
    >
      <div className="flex h-20 items-center justify-between border-b-2 p-4">
        <h1 className="text-2xl font-bold uppercase">Messaging App</h1>
        <button
          onClick={onClose}
          className="cursor-pointer p-2 text-xl font-semibold text-gray-600 hover:text-gray-900 lg:hidden"
        >
          x
        </button>
      </div>
      <ul className="h-full overflow-auto">
        {users.map((d) => (
          <li
            key={d.id}
            className={`m-2 flex cursor-pointer items-center justify-between rounded-md p-4 text-lg hover:bg-gray-200 ${otherUserId === d.id && 'bg-gray-200'}`}
            onClick={() => onSelect(d.id)}
          >
            <div>
              <p className="text-lg font-semibold">{d.username}</p>(
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs">online</span>
              </div>
              )
            </div>
            {d.hasNewMessage && <NewMessageIcon />}
          </li>
        ))}
      </ul>
    </div>
  )
}
