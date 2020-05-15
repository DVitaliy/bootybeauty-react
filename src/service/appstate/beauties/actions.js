function add1(data) {
  console.log('ADD', data)
  return function(dispatch, getState, api) {
    console.log('api', api)

    return new Promise(function(resolve, reject) {
      console.log('*AppStateState/appActions/add')
      dispatch({
        type: 'ADD_INIT'
      })
      setTimeout(() => {
        dispatch({
          type: 'ADD_SUCCESS',
          payload: data
        })
        return resolve('payload')
      }, 3000)
    })
  }
}

const Actions = {
  callAsync: data => (dispatch, state, api) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({ type: 'ADD_SUCCESS', payload: { name: 'werwer' } })
        console.log('**beauties/Actions/callAsync/Promise', state)

        return reject(data)
      }, 3000)
    })
  },
  callSync: data => ({
    type: 'ADD_SUCCESS',
    payload: { name: 'callSync' }
  }),
  func11: data => console.log('state'),
  func1: data => (dispatch, state) => console.log('func1 getState', state),
  func2: data => data,
  func3: data => data,
  func4: data => data,
  func5: data => data
}
export default Actions
