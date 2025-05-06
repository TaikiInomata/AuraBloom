/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [currentCart, setCurrentCart] = useState(
    JSON.parse(localStorage.getItem('currentCart'))
  )

  useEffect(() => {
    const storedCart = localStorage.getItem('currentCart')
    if (storedCart) {
      setCurrentCart(JSON.parse(storedCart))
    }
  }, [])

  const setCart = (data) => {
    localStorage.setItem('currentCart', JSON.stringify(data))
    setCurrentCart(data)
  }

  const clearCart = () => {
    setCurrentCart(null)
    localStorage.removeItem('currentCart')
  }

  return (
    <CartContext.Provider value={{ currentCart, setCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within an CartProvider')
  }
  return context
}
