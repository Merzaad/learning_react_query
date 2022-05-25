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
        background: 'white',
        color: 'black',
        borderRadius: 15,
        overflowWrap: 'anywhere',
        padding: 50,
        textAlign: 'left',
        margin: 50,
        boxShadow: '0px 0px 10px black'
      }}
    >
      {x.isLoading && 'is loading'}
      {x.error && x.error.message}
      server : {x.data && x.data.context.servers} <br />
      {x.data && JSON.stringify(x.data)}
    </div>
  )
}
export default Rq
