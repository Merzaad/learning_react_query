import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useQuery } from 'react-query'

const App = () => {
  const { isLoading, data } = useQuery('test', () =>
    fetch('https://api.blockchair.com/dogecoin/stats').then((res) => res.json())
  )
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Card">
            doge_average_transaction_fee_24h: {isLoading && 'Loading'} {data && data.data.average_transaction_fee_24h}
          </div>
      </header>
    </div>
  )
}

export default App
