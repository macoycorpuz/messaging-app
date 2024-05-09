export const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer p-2 text-xl font-semibold text-gray-600 hover:text-gray-900 md:hidden"
  >
    x
  </button>
)
