/** TODO
 * Clear all console.log
 * Make tools for creating automatically base files
 * Add ability detect automatically user lang (userAgent)
 * Publish this module on npm service
 */

import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import LocalizationContext from './localizationContext'

const LocalizationState = ({ children, settings }) => {
  const { byDefault } = settings

  const [language, setLanguage] = useState(byDefault)
  const [base, setBase] = useState({})

  const history = useHistory()
  const [path, setPath] = useState(history.location.pathname)

  useEffect(() => {
    console.log('run/useEffect (path)', path, language)
    const [, pathMatch = language] = path.match(/^\/(\w{2})\//) || []

    console.log('   setLanguage', pathMatch)
    if (pathMatch !== language) setLanguage(pathMatch)
    // eslint-disable-next-line
  }, [path])

  useEffect(() => {
    console.log('run/useEffect (1)')
    let timerTimeout

    history.listen(location => {
      console.log('  history.listen (1)', location)
      if (timerTimeout) clearTimeout(timerTimeout)
      timerTimeout = setTimeout(setPath.bind(null, location.pathname), 10)
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log('run/useEffect (2)', language)
    const importBase = async lng => {
      console.log('start/importBase (2)', lng)
      let data = {}
      try {
        const result = await import(`./base/${lng}`)
        data = { ...result.default }
      } catch {}

      setBase({
        ...base,
        [lng]: data
      })
    }
    if (!language) return
    if (!(language in base)) importBase(language)
    return () => {
      console.log('return/useEffect (2)')
    }
  }, [language, base])

  const t = text => (base[language] && base[language][text]) || text

  return (
    <LocalizationContext.Provider
      value={{ language, t, setLanguage, byDefault }}
    >
      {children}
    </LocalizationContext.Provider>
  )
}
export default LocalizationState
