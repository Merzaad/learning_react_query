import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useQuery } from 'react-query'

const App = () => {
  const fetchData = async () => {
    const response = await fetch('https://aapi.blockchair.com/dogecoin/stats')
    return response.json()
  }

  const test = useQuery('test', fetchData)

  if (test.error) return <div>error</div>
  if (test.isLoading) return <div>loading</div>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Card">
          doge_average_transaction_fee_24h:
          {test.data.data.average_transaction_fee_24h}
        </div>
      </header>
    </div>
  )
}

export default App
