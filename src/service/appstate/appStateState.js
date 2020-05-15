import React from 'react'
import AppStateContext from './appStateContext'

import useBeauties from './beauties'

const AppStateState = ({ children }) => {
  const [beautiesState, beautiesActions] = useBeauties()

  const appState = {
    beauties: beautiesState
  }
  const appActions = {
    beauties: beautiesActions
  }
  return (
    <AppStateContext.Provider value={[appState, appActions]}>
      {children}
    </AppStateContext.Provider>
  )
}
export default AppStateState
