import { default as en } from './en'
import { default as ru } from './ru'

let lng = process.env.APP_LOCALIZATION

const { [process.env.APP_LOCALIZATION]: translate = 'en' } = { en, ru }

console.log('set transl:', lng)

const t = text => translate[text] || text

export default t

window.addEventListener(
  'hashchange',
  () => {
    console.log(document.location.hash)
    console.log('set transl:', lng)
  },
  false
)

export const setTranslate = () => {
  return 'en'
}
