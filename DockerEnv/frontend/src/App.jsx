import { Route, Routes } from 'react-router-dom'
import ClientLayout from '~/components/Layout/ClientLayout'
import LandingPage from '~/pages/Client/LandingPage/LandingPage'
import ProductList from '~/pages/Client/ProductList/ProductList'
import Login from '~/pages/Auth/Login'
import Register from '~/pages/Auth/Register'
import ProductDetail from '~/pages/Client/ProductDetail/ProductDetail'
import Cart from '~/pages/Client/Cart/CartPage'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>

      <Route path='/' element={<ClientLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='products' element={<ProductList />} />
        <Route path='products/detail/:id' element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
