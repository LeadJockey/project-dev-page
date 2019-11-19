import React, { createContext, useState } from 'react'

const AuthContext = createContext()

function AuthProvider(props) {
  // format
  const AUTH_INFO_FORMAT = { id: '', domain: '', token: '' }
  // state
  const [authInfo, setAuthInfo] = useState(AUTH_INFO_FORMAT)
  const [isAuth, setIsAuth] = useState(false)
  // method
  const login = ({ userInfo }) => {
    setIsAuth(true)
    setAuthInfo({ ...authInfo, ...userInfo })
  }
  const simpleLogin = () => {
    setIsAuth(true)
  }
  const logout = () => {
    setIsAuth(false)
    setAuthInfo(AUTH_INFO_FORMAT)
  }
  // getter
  const getAuthInfo = () => (isAuth ? authInfo : null)
  return <AuthContext.Provider value={{ isAuth, login, logout, getAuthInfo, simpleLogin }}>{props.children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
