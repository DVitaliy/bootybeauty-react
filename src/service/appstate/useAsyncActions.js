import { useCallback, useMemo } from 'react'

const useAsyncActions = ({ state, dispatch, api }, Actions) => {
  const proxyDispatch = useCallback(
    action => {
      if (typeof action === 'function') return action(state, dispatch, api)
      return dispatch(action)
    },
    [state, dispatch, api]
  )
  return useMemo(() => {
    return Object.fromEntries(
      Object.entries(Actions).map(action => [
        action[0],
        data => proxyDispatch(action[1](data))
      ])
    )
  }, [proxyDispatch, Actions])
}

export default useAsyncActions
