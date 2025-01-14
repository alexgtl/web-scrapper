export default function DefaultButton(props) {
  const { children, handleClick } = props

  return (
    <button
      className="bg-red-500 hover:bg-red-600 text-yellow-100 font-bold px-4 py-2 rounded-lg"
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}
