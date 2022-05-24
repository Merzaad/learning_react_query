import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useQuery } from 'react-query'
import Rq from './components/rq'

const App = () => {
  const fetchData = async () => {
    const response = await fetch('https://api.blockchair.com/dogecoin/stats')
    return response.json()
  }

  const test = useQuery('test', fetchData)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Rq data={test} />
      </header>
    </div>
  )
}

export default App
