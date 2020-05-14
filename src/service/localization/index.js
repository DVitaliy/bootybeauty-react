import { useContext } from 'react'

import LocalizationContext from './localizationContext'
export const useTranslate = () => useContext(LocalizationContext)

export { default as Localization } from './localizationState'
