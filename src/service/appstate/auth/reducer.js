export default (state, action) => {
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
        refreshToken: null
      }
    default:
      throw new Error()
  }
}
