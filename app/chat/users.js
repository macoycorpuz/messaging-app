import { useEffect, useState } from 'react'
import { Status } from './_components/Status'
import { CloseButton } from './_components/CloseButton'
import { NewMessageIcon } from './_components/NewMessageIcon'
import { usersData } from './mockData'

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
      className={`absolute z-10 h-full w-full overflow-hidden bg-white sm:max-w-sm sm:border-r-2 md:relative md:border-gray-600 ${!isOpen && 'hidden md:block'}`}
    >
      <div className="flex h-20 items-center justify-between border-b-2 p-4">
        <h1 className="text-2xl font-bold uppercase">Messaging App</h1>
        <CloseButton onClick={onClose} />
      </div>
      <ul className="h-full overflow-auto">
        {users.map((d) => (
          <li
            key={d.id}
            className={`m-2 flex cursor-pointer items-center justify-between rounded-md p-4 text-lg hover:bg-gray-200 ${otherUserId === d.id && 'bg-gray-200'}`}
            onClick={() => onSelect(d.id)}
          >
            <div>
              <p className="text-lg font-semibold">{d.username}</p>
              <Status isActive={d.isActive} />
            </div>
            {d.hasNewMessage && <NewMessageIcon />}
          </li>
        ))}
      </ul>
    </div>
  )
}
