import React, { useReducer } from 'react'
import AuthenticationContext from './authenticationContext'
import AuthenticationReducer from './authenticationReduser'

const AuthenticationState = ({ children }) => {
  const initialState = {
    notes: [],
    isAuthorized: false
  }
  const [state, dispatch] = useReducer(AuthenticationReducer, initialState)

  return (
    <AuthenticationContext.Provider value={{ isAuthorized: false }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
export default AuthenticationState
