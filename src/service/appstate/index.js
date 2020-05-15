import { useContext } from 'react'

import AppStateContext from './appStateContext'
export const useAppState = () => useContext(AppStateContext)

export { default as AppState } from './appStateState'
