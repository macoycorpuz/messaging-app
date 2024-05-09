export const Status = ({ isActive }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
      <span className="text-xs">online</span>
    </div>
  )
}
