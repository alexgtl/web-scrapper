export default function BuyButton(props) {
  const { children, handleClick } = props

  return (
    <button
      className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}
