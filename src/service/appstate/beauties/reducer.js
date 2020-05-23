const Reduser = (state, action) => {
  switch (action.type) {
    case 'API_INIT':
      return {
        ...state,
        isLoading: true
      }
    case 'API_FINISH':
      return {
        ...state,
        isLoading: false
      }
    case 'SET_STATE':
      return {
        ...state,
        data: [...state.data, action.payload]
      }

    default:
      throw new Error()
  }
}
export default Reduser
