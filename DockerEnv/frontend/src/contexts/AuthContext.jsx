/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  )

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
  }, [])

  const setUser = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    setCurrentUser(data)
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
  }

  return (
    <AuthContext.Provider value={{ currentUser, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
