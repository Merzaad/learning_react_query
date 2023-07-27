import CoinCard from './components/CoinCard'

function App() {
  return (
    <>
      <div className='grid grid-cols-3 p-4 h-full border border-teal-500 rounded-lg flex-col gap-2'>
        <CoinCard coin='ethereum' />
        <CoinCard coin='dogecoin' />
        <CoinCard coin='bitcoin' />
      </div>
    </>
  )
}

export default App
