/** TODO
 * @_Lifecycles
 * Set LOGICAL  enum value ['init','mount','store','live']
 * Avoid execute  twice - done
 */

import { useMemo, useCallback } from 'react'

const useStoreState = (initialState, Key) => {
  const storeSubscribe = useCallback(
    state => {
      let action = 'remove'
      for (let [key, value] of Object.entries(state)) {
        if (value !== initialState[key]) {
          action = 'save'
          break
        }
      }

      try {
        if (action === 'save') {
          const serializedState = JSON.stringify(state)
          localStorage.setItem(Key, serializedState)
        }
        if (action === 'remove') {
          localStorage.removeItem(Key)
        }
      } catch {}
    },
    [initialState, Key]
  )

  const storeState = useMemo(() => {
    try {
      const serializedState = localStorage.getItem(Key)
      if (serializedState !== null)
        return {
          ...initialState,
          ...JSON.parse(serializedState)
          //_Lifecycles: 'store'
        }
    } catch {}

    return initialState
    // eslint-disable-next-line
  }, [])

  return [storeState, storeSubscribe]
}

export default useStoreState
