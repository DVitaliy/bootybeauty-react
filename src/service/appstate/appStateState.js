import React from 'react'
import AppStateContext from './appStateContext'

import useAuth from './auth'
import useBeauties from './beauties'

const AppStateState = ({ children }) => {
  const [authState, authActions] = useAuth()
  const [beautiesState, beautiesActions] = useBeauties()

  const appStates = {
    auth: authState,
    beauties: beautiesState
  }
  const appActions = {
    auth: authActions,
    beauties: beautiesActions
  }
  return (
    <AppStateContext.Provider value={[appStates, appActions]}>
      {children}
    </AppStateContext.Provider>
  )
}
export default AppStateState
