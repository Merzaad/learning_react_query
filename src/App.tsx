import CoinCard from './components/CoinCard'
import FakeQueryCard from './components/FakeQueryCard'

function App() {
  return (
    <>
      <div className='grid grid-cols-1 p-4 h-full border border-teal-500 rounded-lg flex-col gap-2 overflow-y-auto md:grid-cols-3'>
        <CoinCard coin='ethereum' />
        <CoinCard coin='dogecoin' />
        <CoinCard coin='bitcoin' />
        <FakeQueryCard initial={4} />
        <FakeQueryCard initial={2} />
      </div>
    </>
  )
}

export default App
