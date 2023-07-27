import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchCoin = async (coin: string) => {
  if (coin === 'bitcoin') throw new Error('bitcoin is not supported')
  const { data } = await axios.get(`https://api.blockchair.com/${coin}/stats`)
  return data.data
}

export default function useCoinQuery(coin: string) {
  return useQuery({
    queryKey: ['ethQuery', coin],
    queryFn: () => fetchCoin(coin),
    refetchOnWindowFocus: false,
  })
}
