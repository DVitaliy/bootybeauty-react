import { default as en } from './en'
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
  },
  false
)

export const getLanguage = () => language
