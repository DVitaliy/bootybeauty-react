import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppState } from '../service/appstate'
//import { useTranslate } from '../service/localization'

const BeautyPage = () => {
  const [appState, appAction] = useAppState()
  const { languageParam, beautyParam, bootyParam = 'none' } = useParams()

  const [beauty, setBeauty] = useState()

  useEffect(() => {
    //if ()
    console.log('BeautyPage/useEffect ', appState)

    const findOne = async name => {
      try {
        const data = await appAction.beauties.findOne({ name })
        setBeauty(data)
        console.log('BeautyPage/useEffect data ', data)
      } catch (e) {
        console.log('BeautyPage/useEffect error ', e)
      }
    }

    findOne(beautyParam)

    // eslint-disable-next-line
  }, [setBeauty])

  //const

  return (
    <>
      <i>
        Beauty page {beautyParam} {bootyParam} {languageParam}
      </i>
    </>
  )
}
export default BeautyPage
