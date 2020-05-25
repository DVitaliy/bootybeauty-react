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

const dbTEST = [
  {
    name: 'Sandra',
    followers: 1000,
    booties: [
      { id: 1, photo: ['url_to_photo1'], colors: ['color1', 'color2'] },
      { id: 2, photo: ['url_to_photo2'], colors: ['color1', 'color2'] },
      { id: 3, photo: ['url_to_photo3'], colors: ['color1', 'color2'] }
    ]
  },
  { name: 'Lora' }
]

const useBeauties = api => {
  const initialState = {
    data: [...dbTEST],
    isLoading: false
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
