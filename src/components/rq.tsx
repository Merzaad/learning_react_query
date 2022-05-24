import React from 'react'
import { UseQueryResult } from 'react-query'

interface test {
  data: UseQueryResult<any, any>
}
const Rq = ({ data }: test) => {
  const x = data
  return (
    <div
      style={{
        minWidth: '40%',
        height: 100,
        background: 'white',
        color: 'black',
      }}
    >
      {x.isLoading && 'is loading'}
      {x.error && x.error.message}
      {x.data && x.data.data.average_transaction_fee_24h}
    </div>
  )
}
export default Rq
