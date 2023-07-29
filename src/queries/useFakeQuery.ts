import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function useFakeQuery(initial: number) {
  const [state, setState] = useState(() => initial)
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
  return { useQuery: useQuery({ queryKey: ['fakeQuery'], queryFn }), state }
}
