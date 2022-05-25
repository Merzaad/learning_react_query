import * as React from 'react'
import { useQuery } from 'react-query'
import CoinCard from './components/card'

const App = () => {
  const fetchData = async (coin: string) => {
    const response = await fetch(`https://api.blockchair.com/${coin}/stats`)
    if (response.status === 200) return response.json()
    return new Promise((resolve) => resolve({ data: { transactions: 'status !== 200' } }))
  }

  const coins = ['bitcoin', 'dogecoin', 'ethereum']
  const cards = coins.map((coin) => {
    const query = useQuery(['coin', coin], () => fetchData(coin))
    return <CoinCard coinResponse={query} key={coin} coin={coin} />
  })
  return (
    <div
      style={{
        padding: 10,
        minHeight: '100vh',
        background: 'black',
      }}
    >
      {cards}
    </div>
  )
}

export default App
