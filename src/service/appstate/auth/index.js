/** TODO
 * Set LOGICAL (in state) enum value ex. Clear, FromCache, Loads
 * set Reduser and Actions
 */

import { useReducer, useEffect } from 'react'
import Reducer from './reducer'
import Actions from './actions'
import useAsyncActions from '../useAsyncActions'

const useAuth = api => {
  const initialState = {
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    isError: false
  }
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    api.setToken(state.accessToken)
  }, [api, state.accessToken])

  const actions = useAsyncActions({ state, dispatch, api }, Actions)
  return [{ isAuthorized: !!state.accessToken }, actions]
}
export default useAuth
