const Actions = {
  findOne: obj => (state, dispatch, api) => {
    return new Promise((resolve, reject) => {
      const key = Object.keys(obj)[0]
      const value = Object.values(obj)[0]

      const item = state.data.find(item => {
        const target = typeof value === 'string' ? value.toLowerCase() : value
        const source =
          typeof value === 'string' ? item[key].toLowerCase() : item[key]
        return target === source
      })

      if (item) return resolve(item)

      dispatch({ type: 'API_INIT' })

      setTimeout(() => {
        dispatch({ type: 'API_FINISH' })

        return reject('data not found')
      }, 1000)
    })
  },

  callAsync: data => (state, dispatch, api) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: 'API_INIT' })
      setTimeout(() => {
        dispatch({ type: 'API_FINISH' })
        dispatch({ type: 'SET_STATE', payload: { name: 'callAsync' } })
        console.log('**beauties/Actions/callAsync/Promise', state)

        return resolve(data)
      }, 1000)
    })
  },

  callSync: data => ({
    type: 'SET_STATE',
    payload: { name: 'callSync' }
  })
}
export default Actions
