const Actions = {
  authenticationSync: data => ({
    type: 'ADD_SUCCESS',
    payload: data
  }),
  refreshTokens: data => (dispatch, state, api) => {},
  clearTokensSync: data => ({
    type: 'CLEAR'
  })
}
export default Actions
