/** TODO
 * Clear log
 * Finish 'abortResponse' function, set conditions for 500, 401 responce status
 *
 */

import React, { useEffect } from 'react'
import AppStateContext from './appStateContext'

import useAuth from './auth'
import useBeauties from './beauties'

const AppStateState = ({ children, settings }) => {
  const { api } = settings

  useEffect(() => {
    console.log('AppStateState/useEffect -> expected ONE time init')

    const abortResponse = ({ status }, { abort }) => {
      console.log('API status/abortResponse', status)
    }

    api.subscribeResponse(abortResponse)
    return () => api.unsubscribeResponse(abortResponse)
  }, [api])

  const [authState, authActions] = useAuth(api)
  const [beautiesState, beautiesActions] = useBeauties(api)

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
