import React from 'react'

interface param {
  data: any
}

const Rq = ({ data }: param) => {
  const x = data.data.average_transaction_fee_24h
  return (
    <div
      style={{
        minWidth: '40%',
        height: 100,
        background: 'white',
        color: 'black',
      }}
    >
      {x}
    </div>
  )
}
export default Rq
