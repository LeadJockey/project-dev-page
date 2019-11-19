import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from 'core/contexts'

function ProtectedRoute({ component: Component, ...rest }) {
  const authContext = useContext(AuthContext)
  const isAuth = authContext.isAuth
  return <Route render={props => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)} {...rest} />
}

export default ProtectedRoute
