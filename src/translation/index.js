import React, { createContext, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

const LocalizationContext = createContext()
export const useTranslate = () => useContext(LocalizationContext)

export const Localization = ({ children, byDefault }) => {
  console.log('init _____Localization: ', byDefault)

  const [language, setLanguage] = useState(byDefault)
  const [base, setBase] = useState({})
  const { location, listen } = useHistory()

  useEffect(() => {
    listen((loc, action) => {
      console.log('location', loc)
      console.log('action', action)
    })
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    console.log('!!!!!!!!!!!!!!useEffect', location)
    const [, pathMatch = byDefault] =
      location.pathname.match(/^\/(\w{2})\//) || []

    console.log('1 setLanguage', pathMatch)
    setLanguage(pathMatch)

    const importBase = async lng => {
      console.log('start importBase')
      let data = {}
      try {
        const result = await import(`./${lng}`)
        data = { ...result.default }
      } catch {}

      console.log('get data', data)
      setBase({
        ...base,
        [lng]: data
      })
    }

    if (!(pathMatch in base)) importBase(pathMatch)

    return () => {
      console.log('-------------return useEffect Localization')
    }
    // eslint-disable-next-line
    //ee
  }, [base, byDefault, location])

  const t = text => (base[language] && base[language][text]) || text
  return (
    <LocalizationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LocalizationContext.Provider>
  )
}

/*import { default as en } from './en'
import { default as ru } from './ru'

const language = (({ pathname }) => {
  const [, pathMatch = ''] = pathname.match(/^\/(\w{2})\//) || []

  console.log('pathMatch:', pathMatch)
  return pathMatch
})(document.location)

const { [language || process.env.APP_LOCALIZATION]: translate = 'en' } = {
  en,
  ru
}

console.log('set language:', language)
console.log('set translate:', translate)

const t = text => translate[text] || text

export default t

window.addEventListener(
  'hashchange',
  e => {
    console.log(e)
    console.log(document.location)
    console.log('e.newURL: ', e.newURL)
    console.log('e.oldURL: ', e.oldURL)
    console.log('document.location: ', document.location.toString())

    const [, lng = ''] = e.newURL.match(/#lng=(\w{2})/) || []
    if (!lng) return
    //window.navigator.language.slice(0, 2)
    console.log('lng: ', lng)
    setTimeout(() => {
      document.location.replace('https://qh6eu.csb.app/e')
      document.location.reload()
    }, 100)
  },
  false
)

export const getLanguage = () => language*/
