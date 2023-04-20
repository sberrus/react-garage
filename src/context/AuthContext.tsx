// imports
import React, { useState, createContext, useContext, useEffect } from 'react'

// helpers
import { fakeAsyncLogin, fakeAsyncLogout } from '../helpers/authHelper'

// create context
export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

// types
type AuthProviderProps = { children: React.ReactElement }
interface IAuthContext {
  user: boolean
  login: () => void
  logout: () => void
}

// component
const AuthProvider = ({ children }: AuthProviderProps) => {
  // userLoggedToggle
  const [user, setUser] = useState(false)

  // auth Methods
  const login = async () => {
    const result = await fakeAsyncLogin()

    if (result) {
      console.log('user has logged in')

      setUser(true)
    }
  }

  const logout = async (): Promise<void> => {
    const result = await fakeAsyncLogout()

    if (result) {
      console.log('The User has logged out')
      setUser(false)
    }
  }

  return (
    // Using the provider so that ANY component in our application can
    // use the values that we are sending.
    <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
