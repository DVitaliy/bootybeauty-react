import { useReducer, useCallback, useMemo } from 'react'
import { default as Reducer } from './reducer'
import Actions from './actions'

const useAuth = () => {
  const initialState = {
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    isError: false
  }
  const [state, dispatch] = useReducer(Reducer, initialState)

  const proxyDispatch = useCallback(
    action => {
      if (typeof action === 'function') return action(dispatch, state, {}) //TODO add API
      return dispatch(action)
    },
    [state]
  )
  const actions = useMemo(() => {
    return Object.fromEntries(
      Object.entries(Actions).map(action => [
        action[0],
        data => proxyDispatch(action[1](data))
      ])
    )
  }, [proxyDispatch])

  return [{ ...state, isAuthorized: !!state.accessToken }, actions]
}
export default useAuth
