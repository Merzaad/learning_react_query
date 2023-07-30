import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function useFakeQuery(id: number) {
  const [state, setState] = useState(0)
  const queryFn = async () => {
    const promise = () => {
      return new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(state + 1)
        }, 1000)
      })
    }
    const data = await promise()
    setState(data)
    return data
  }
  return { useQuery: useQuery({ queryKey: ['fakeQuery', id], queryFn }), state }
}
