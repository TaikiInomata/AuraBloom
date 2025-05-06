import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import { AuthProvider } from '~/contexts/AuthContext'
import { CartProvider } from '~/contexts/CartContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
    <Toaster />
  </BrowserRouter>
)
