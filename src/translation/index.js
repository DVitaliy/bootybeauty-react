import React, { createContext, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

const LocalizationContext = createContext()
export const useTranslate = () => useContext(LocalizationContext)

export const Localization = ({ children, settings }) => {
  const { byDefault } = settings

  console.log('init/Localization')

  const [language, setLanguage] = useState()
  const [base, setBase] = useState({})
  const [path, setPath] = useState()

  const history = useHistory()

  useEffect(() => {
    console.log('run/useEffect (path)', path, language)
    const [, pathMatch = language || byDefault] =
      (path || history.location.pathname).match(/^\/(\w{2})\//) || []

    console.log('   setLanguage', pathMatch)
    if (pathMatch !== language) setLanguage(pathMatch)
    // eslint-disable-next-line
  }, [path])

  useEffect(() => {
    console.log('run/useEffect (1)')
    let timerTimeout

    console.log(' subscrube/history.listen')
    history.listen(location => {
      //console.log('********* history.listen ********* :', location)
      if (timerTimeout) clearTimeout(timerTimeout)
      timerTimeout = setTimeout(setPath.bind(null, location.pathname), 10)
    })
    return () => {
      console.log('return/useEffect (1)')
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log('run/useEffect (2)', language)
    const importBase = async lng => {
      console.log('start/importBase (2)', lng)
      let data = {}
      try {
        const result = await import(`./${lng}`)
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
    <LocalizationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LocalizationContext.Provider>
  )
}
