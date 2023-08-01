import CoinCard from '../components/CoinCard'

export default function Home() {
  return (
    <>
      <div className='grid h-full grid-cols-1 p-4 bg-zinc-800 rounded-lg gap-2 overflow-y-auto md:grid-cols-3'>
        <CoinCard coin='ethereum' />
        <CoinCard coin='dogecoin' />
        <CoinCard coin='abc' />
      </div>
    </>
  )
}
