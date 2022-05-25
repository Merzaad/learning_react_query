import React from 'react'
import { UseQueryResult } from 'react-query'

interface test {
  coinResponse: UseQueryResult<any, any>
  coin: string
}

const CoinCard = ({ coinResponse, coin }: test) => {
  const isLoading = coinResponse.isLoading ? 'loading' : ''
  const row = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ width: '30%', color: 'white' }}>{coin}</div>
      <div style={{ width: '30%', color: 'gray' }}> transactions:</div>
      <div style={{ width: '30%', color: 'white' }}>
        { isLoading ? 'loading' : coinResponse.data.data.transactions}
      </div>
    </div>
  )

  return (
    <div
      style={{
        background: 'linear-gradient(54deg, #0e0e0e 0%, #1f1f1f 100%)',
        color: 'black',
        width: '4 0%',
        borderRadius: 15,
        padding: '40px 20px 40px 20px',
        boxShadow: '0px 0px 5px black',
      }}
    >
      {row}
    </div>
  )
}
export default CoinCard
