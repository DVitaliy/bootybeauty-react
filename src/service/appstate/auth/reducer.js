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
        ...action.payload
      }
    case 'CLEAR':
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        isLoading: false
      }
    case 'load':
      return {
        ...state,
        isLoading: true
      }
    default:
      throw new Error()
  }
}
export default Reduser
