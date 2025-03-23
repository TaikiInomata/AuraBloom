import { Route, Routes } from 'react-router-dom'
import ClientLayout from '~/components/Layout/ClientLayout'
import LandingPage from '~/pages/Client/LandingPage/LandingPage'
import ProductList from '~/pages/Client/ProductList/ProductList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<ClientLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='products' element={<ProductList />} />
      </Route>
    </Routes>
  )
}

export default App
