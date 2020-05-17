const Actions = {
  callAsync: data => (state, dispatch, api) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: 'ADD_INIT' })
      setTimeout(() => {
        dispatch({ type: 'ADD_SUCCESS', payload: { name: 'callAsync' } })
        console.log('**beauties/Actions/callAsync/Promise', state)

        return resolve(data)
      }, 1000)
    })
  },
  callSync: data => ({
    type: 'ADD_SUCCESS',
    payload: { name: 'callSync' }
  }),
  func11: data => console.log('state'),
  func1: data => state => console.log('func1 getState', state),
  func2: data => data,
  func3: data => data,
  func4: data => data,
  func5: data => data
}
export default Actions
