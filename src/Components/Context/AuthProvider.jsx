import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    console.log(token, "This is token")
    console.log(user, "This is user")

    const login = (loginToken, userDetails) => {
        setToken(loginToken)
        setUser(userDetails)
    }

  return (
    <AuthContext.Provider value={{token, user, login}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider