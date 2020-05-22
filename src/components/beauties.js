import React, { useEffect } from 'react'

import { useAppState } from '../service/appstate'

const Beauties = () => {
  const [appState, appAction] = useAppState()

  useEffect(() => {
    console.log(appState)
    // eslint-disable-next-line
  }, [])

  return <h1>Beauties</h1>
}
export default Beauties
