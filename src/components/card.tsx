import React from 'react'
import { UseQueryResult } from 'react-query'

interface test {
  coinResponse: UseQueryResult<any, any>
  coin: string
}

const CoinCard = ({ coinResponse, coin }: test) => {
  const error = coinResponse.error ? 'error' : ''
  const isLoading = coinResponse.isLoading ? 'loading' : ''
  const row = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ width: '30%' }}>{coin}</div>
      <div style={{ width: '30%' }}> transactions:</div>
      <div style={{ width: '30%' }}>{coinResponse.data ? coinResponse.data.data.transactions : isLoading}</div>
    </div>
  )

  return (
    <div
      style={{
        display: 'felx',
        background: 'white',
        width: '80%',
        color: 'black',
        borderRadius: 15,
        padding: '40px 20px 40px 20px',
        margin: 50,
        boxShadow: '0px 0px 5px black',
      }}
    >
      {row}
      {error}
    </div>
  )
}
export default CoinCard
