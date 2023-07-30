export default function Button({
  onClick,
  children,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}) {
  return (
    <button
      className='rounded-md bg-zinc-800 p-1 hover:bg-teal-800 active:scale-95'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
