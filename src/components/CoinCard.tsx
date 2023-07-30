import useCoinQuery from '../queries/useCoinQuery'

export default function CoinCard({ coin }: { coin: string }) {
  const { data, isError, isLoading, status, fetchStatus } = useCoinQuery(coin)
  const price = data?.market_price_usd
  return (
    <div className='flex justify-center p-4 items-center bg-zinc-900 rounded-lg  flex-col'>
      <div>{coin[0].toUpperCase() + coin.slice(1)}</div>
      <div>status: {status}</div>
      <div>fetch: {fetchStatus}</div>
      <div>error: {String(isError)}</div>
      <div>loading: {String(isLoading)}</div>
      {data && <div>price: {price}</div>}
    </div>
  )
}
