import useFakeQuery from '../queries/useFakeQuery'
import Button from './Button'

export default function FakeQueryCard({ id }: { id: number }) {
  const { useQuery, state } = useFakeQuery(id)
  const { data, refetch, fetchStatus } = useQuery

  return (
    <div className='flex justify-center p-4 gap-2 items-center bg-zinc-900 rounded-lg border-teal-500 flex-col'>
      <div>id: {id}</div>
      <div>fetch: {fetchStatus}</div>
      {data && <div>value: {data}</div>}
      <div>state: {state}</div>
      <Button onClick={() => refetch()}>refetch</Button>
    </div>
  )
}
