import * as React from 'react'
import { useQuery } from 'react-query'
import CoinCard from './components/card'

const App = () => {
  const fetchData = async (coin) => {
    const response = await fetch(`https://api.blockchair.com/${coin}/stats`)
    if (response.status === 200) return response.json()
    return new Promise((resolve) => resolve({ data: { transactions: 'status !== 200' } }))
  }

  const coins = ['bitcoin', 'dogecoin', 'ethereum']
  const cards = coins.map((coin) => {
    const query = useQuery(['coin', coin], () => fetchData(coin))
    return <CoinCard coinResponse={query} key={coin} coin={coin} />
  })
  const submit = (otp) => {
    alert(otp)
  }
  React.useEffect(() => {
    if ('OTPCredential' in window) {
      const ac = new AbortController()
      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        })
        .then((otp) => {
          submit(otp.code)
        })
        .catch((err) => {
          console.log(err)
        })
    }
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
      <form>
        <input />
        <button onClick={submit} >
          submit
        </button>
      </form>
    </div>
  )
}

export default App
