import { useContext } from 'react'

import AuthenticationContext from './authenticationContext'
export const useAuthentication = () => useContext(AuthenticationContext)

export { default as Authentication } from './authenticationState'
