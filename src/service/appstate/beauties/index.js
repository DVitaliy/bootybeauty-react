/** TODO
 * Clear initialState (remove payload data)
 * Set LOGICAL (in state) enum value ex. Clear, FromCache, Loads
 * set Reduser and Actions
 */

import { useReducer } from 'react'
import Reducer from './reducer'
import Actions from './actions'
import useAsyncActions from '../useAsyncActions'

const useBeauties = api => {
  const initialState = {
    data: [{ name: 'Sandra' }, { name: 'Lora' }],
    isLoading: false,
    isError: false
  }
  const [state, dispatch] = useReducer(Reducer, initialState)

  const actions = useAsyncActions({ state, dispatch, api }, Actions)

  return [state, actions]
}
export default useBeauties
