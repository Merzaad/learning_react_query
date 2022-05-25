import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import { useQuery } from 'react-query'
import CoinCard from './components/card'

const App = () => {
  const [coin, setCoin] = React.useState('dogecoin')
  const fetchData = async (coin: string) => {
    const response = await fetch(`https://api.blockchair.com/${coin}/stats`)
    return response.json()
  }
  const test = useQuery(['coin', coin], () => fetchData(coin))
  const switchCoinHandler = () => {
    if (coin === 'bitcoin') setCoin('dogecoin')
    if (coin === 'dogecoin') setCoin('bitcoin')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          style={{
            padding: 20,
            fontSize: 20,
          }}
          onClick={switchCoinHandler}
        >
          Switch
        </button>
        <CoinCard coinResponse={test} coin={coin} />
      </header>
    </div>
  )
}

export default App
