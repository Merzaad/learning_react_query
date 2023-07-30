import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='page1' element={<Page1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
