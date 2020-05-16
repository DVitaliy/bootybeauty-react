const Actions = {
  authenticationSync: data => ({
    type: 'ADD_SUCCESS',
    payload: data
  }),
  authentication: data => (state, dispatch, api) => api.fakeGET(),
  authentication2: data => (state, dispatch, api) => api,
  refreshTokens: data => (state, dispatch, api) => {},
  clearTokensSync: data => ({
    type: 'CLEAR'
  }),
  loadTokensSync: data => ({
    type: 'load'
  })
}
export default Actions
