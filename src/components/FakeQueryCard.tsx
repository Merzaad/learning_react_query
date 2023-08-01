import useFakeQuery from '../queries/useFakeQuery'
import Button from './Button'

export default function FakeQueryCard({ id }: { id: number }) {
  const { useQuery, state } = useFakeQuery(id)
  const { data, refetch, fetchStatus, error } = useQuery
  return (
    <div className='flex justify-center p-4 gap-2 items-center bg-zinc-900 rounded-lg border-teal-500 flex-col'>
      <div>id: {id}</div>
      <div>fetch status: {fetchStatus}</div>
      <div>error: {error instanceof Error && error.message}</div>
      {<div>result: {data}</div>}
      <div>state: {state}</div>
      <Button onClick={() => refetch()}>refetch</Button>
    </div>
  )
}
