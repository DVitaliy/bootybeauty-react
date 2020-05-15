import { useReducer } from 'react'
import { default as Reducer } from './reducer'
//import { * } from './actions'

const useBeauties = () => {
  const initialState = {
    data: [{ name: 'Sandra' }, { name: 'Lora' }],
    isLoading: false,
    isError: false
  }
  const [state, dispatch] = useReducer(Reducer, initialState)

  const actions = {
    add() {
      console.log('*AppStateState/appActions/add')
      dispatch({
        type: 'ADD_INIT'
      })
      setTimeout(() => {
        dispatch({
          type: 'ADD_SUCCESS',
          payload: { name: 'Kira' }
        })
      }, 3000)
    }
  }

  return [state, actions]
}
export default useBeauties
