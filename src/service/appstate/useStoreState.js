/** TODO
 * @_Lifecycles
 * Set LOGICAL  enum value ['init','mount','store','live']
 * Avoid execute  twice
 */

import { useMemo, useCallback } from 'react'

const useStoreState = (initialState, key) => {
  let _hookLifeCycles = '_init_'

  const storeSubscribe = useCallback(
    state => {
      console.log('useStoreState/call storeSubscribe', state, _hookLifeCycles)
      if (_hookLifeCycles === '_init_') {
        // eslint-disable-next-line
        _hookLifeCycles = '_mount_'
        return
      }

      console.log(JSON.stringify(initialState))

      try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(key, serializedState)
      } catch {}
    },
    [_hookLifeCycles]
  )

  const storeState = useMemo(() => {
    console.log(
      'useStoreState/useMemo loadState just ONE',
      JSON.stringify(initialState)
    )

    try {
      const serializedState = localStorage.getItem(key)
      if (serializedState !== null)
        return {
          ...initialState,
          ...JSON.parse(serializedState),
          _Lifecycles: 'store'
        }
    } catch {}

    return initialState
    // eslint-disable-next-line
  }, [])

  return [storeState, storeSubscribe]
}

export default useStoreState
