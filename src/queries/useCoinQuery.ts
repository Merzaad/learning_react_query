import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const fetchCoin = async (coin: string) => {
  const { data } = await axios.get(`https://api.blockchair.com/${coin}/stats`)
  return data.data
}

export default function useCoinQuery(coin: string) {
  const [enabled, setEnabled] = useState(false)
  const enableQuery = () => setEnabled(true)
  return {
    useQuery: useQuery({
      queryKey: ['ethQuery', coin],
      queryFn: () => fetchCoin(coin),
      refetchOnWindowFocus: false,
      enabled,
      retry: 1,
      retryDelay: 3000,
    }),
    enableQuery,
    enabled,
  }
}
