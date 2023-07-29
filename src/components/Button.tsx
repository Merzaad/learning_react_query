export default function Button({
  onClick,
  children,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}) {
  return (
    <button
      className='rounded-md bg-zinc-900 p-2 hover:bg-teal-900 active:scale-95'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
