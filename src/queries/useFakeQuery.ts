import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function useFakeQuery(id: number) {
  const [state, setState] = useState(0)
  const queryFn = () =>
    new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        setState(state + 1)
        if (state === 3) reject(new Error('state was 3'))
        resolve(state + 1)
      }, 1000)
    })
  return { useQuery: useQuery({ queryKey: ['fakeQuery', id], queryFn }), state }
}
