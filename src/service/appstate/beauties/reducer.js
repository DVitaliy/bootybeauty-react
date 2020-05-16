const Reduser = (state, action) => {
  switch (action.type) {
    case 'ADD_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'ADD_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, action.payload]
      }
    case 'ADD_FAILURE':
      return { ...state }
    case 'TEST':
      console.log('*beauties/Reduser/', state, action)
      return { ...state }
    default:
      throw new Error()
  }
}
export default Reduser