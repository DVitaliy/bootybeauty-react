/** TODO
 * Clear initialState (remove payload data)
 * Set LOGICAL (in state) enum value ex. Clear, FromCache, Loads
 * set Reduser and Actions
 */

import { useReducer /*, useEffect*/ } from 'react'
import Reducer from './reducer'
import Actions from './actions'
import useAsyncActions from '../useAsyncActions'
//import useStoreState from '../useStoreState'

const useBeauties = api => {
  const initialState = {
    data: [{ name: 'Sandra' }, { name: 'Lora' }],
    isLoading: false,
    isError: false
  }
  //const [storeState, storeSubscribe] = useStoreState(initialState, 'beauties')
  const [state, dispatch] = useReducer(Reducer, initialState /*storeState*/)

  // const { data } = state
  // useEffect(() => {
  //   storeSubscribe({ data })
  // }, [storeSubscribe, data])

  const actions = useAsyncActions({ state, dispatch, api }, Actions)

  return [state, actions]
}
export default useBeauties
