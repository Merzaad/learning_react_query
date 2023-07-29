import useCoinQuery from '../queries/useCoinQuery'

export default function CoinCard({ coin }: { coin: string }) {
  const { data, isError, isLoading } = useCoinQuery(coin)
  const price = data?.market_price_usd
  return (
    <div className='flex justify-center p-4 items-center border rounded-lg border-teal-500 flex-col'>
      <div>{coin[0].toUpperCase() + coin.slice(1)}</div>
      {isLoading && <div>loading</div>}
      {isError && <div>error</div>}
      {data && <div>price: {price}</div>}
    </div>
  )
}
