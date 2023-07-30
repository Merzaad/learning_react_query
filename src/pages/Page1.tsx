import FakeQueryCard from '../components/FakeQueryCard'

export default function Page1() {
  return (
    <>
      <div className='grid grid-cols-1 p-4 h-full bg-zinc-800 rounded-lg flex-col gap-2 overflow-y-auto md:grid-cols-2'>
        <FakeQueryCard id={1} />
        <FakeQueryCard id={2} />
        <FakeQueryCard id={1} />
        <FakeQueryCard id={3} />
      </div>
    </>
  )
}
