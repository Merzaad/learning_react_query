import useFakeQuery from '../queries/useFakeQuery'
import Button from './Button'

export default function FakeQueryCard({ initial }: { initial: number }) {
  const { useQuery, state } = useFakeQuery(initial)
  const { data, isError, isLoading, refetch, isFetching } = useQuery

  return (
    <div className='flex justify-center p-4 gap-2 items-center border rounded-lg border-teal-500 flex-col'>
      <div>fetching: {String(isFetching)}</div>
      <div>loading: {String(isLoading)}</div>
      <div>error: {String(isError)}</div>
      {data && <div>value: {data}</div>}
      <div>state: {state}</div>
      <Button onClick={() => refetch()}>refetch</Button>
    </div>
  )
}
