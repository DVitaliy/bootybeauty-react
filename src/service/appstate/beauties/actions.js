const add = data => (dispatch, getState, api) => {
  dispatch({ type: 'AUTH_ACTION.LOGIN_REQUEST' })
  console.log(data)
}
export const Actions = { add }
