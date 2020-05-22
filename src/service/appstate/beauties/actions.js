const Actions = {
  findOne: obj => (state, dispatch, api) => {
    return new Promise((resolve, reject) => {
      const key = Object.keys(obj)[0]
      const value = obj[key]

      const data = state.data.find(item => {
        const target = typeof value === 'string' ? value.toLowerCase() : value
        const source =
          typeof value === 'string' ? item[key].toLowerCase() : item[key]
        return target === source
      })

      if (data) return resolve(data)

      dispatch({ type: 'FETCH_INIT' })

      setTimeout(() => {
        dispatch({ type: 'FETCH_FAILURE' })

        return reject('data not found')
      }, 1000)
    })
  },

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
