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
  if (test.error) return <div>error</div>
  if (test.isLoading) return <div style={{ textAlign: 'center' }}>loading</div>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Rq data={test.data} />
      </header>
    </div>
  )
}

export default App
