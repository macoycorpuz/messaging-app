export const BackButton = ({ onBack }) => (
  <button
    onClick={onBack}
    className="cursor-pointer p-2 text-4xl font-semibold md:hidden"
  >
    {'<'}
  </button>
)
