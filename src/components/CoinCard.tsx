import useCoinQuery from '../queries/useCoinQuery'
import Button from './Button'

export default function CoinCard({ coin }: { coin: string }) {
  const { useQuery, enableQuery, enabled } = useCoinQuery(coin)
  const { data, error, isLoading, status, fetchStatus } = useQuery
  const price = data?.market_price_usd
  return (
    <div className='flex justify-center p-4 items-center bg-zinc-900 rounded-lg gap-2  flex-col'>
      <div>{coin[0].toUpperCase() + coin.slice(1)}</div>
      <div>status: {status}</div>
      <div>fetch: {fetchStatus}</div>
      <div>error: {error instanceof Error && error.message}</div>
      <div>loading: {String(isLoading)}</div>
      <div>price: {price}</div>
      {!enabled && <Button onClick={enableQuery}>enable</Button>}
    </div>
  )
}
