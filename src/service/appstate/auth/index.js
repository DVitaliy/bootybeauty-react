/** TODO
 * Set LOGICAL (in state) enum value ex. Clear, FromCache, Loads
 * set Reduser and Actions
 */

import { useReducer, useEffect } from 'react'
import Reducer from './reducer'
import Actions from './actions'
import useAsyncActions from '../useAsyncActions'
import useStoreState from '../useStoreState'

const useAuth = api => {
  const initialState = {
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    isError: false
  }

  const [storeState, storeSubscribe] = useStoreState(initialState, 'auth')
  const [state, dispatch] = useReducer(Reducer, storeState)
  const { accessToken } = state

  useEffect(() => {
    storeSubscribe({ accessToken })
  }, [storeSubscribe, accessToken])

  useEffect(() => {
    api.setToken(accessToken)
  }, [api, accessToken])

  const actions = useAsyncActions({ state, dispatch, api }, Actions)
  return [{ isAuthorized: !!accessToken }, actions]
}
export default useAuth
