import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppState } from '../service/appstate'
//import { useTranslate } from '../service/localization'

const BeautyPage = () => {
  const [, appAction] = useAppState()
  const { languageParam, beautyParam, bootyParam = 'none' } = useParams()

  const [beauty, setBeauty] = useState({})

  useEffect(() => {
    const findOne = async name => {
      try {
        const data = await appAction.beauties.findOne({ name })
        setBeauty(data)
        console.log('BeautyPage/useEffect data ', data)
      } catch (e) {
        console.log('BeautyPage/useEffect error ', e)
        setBeauty({ name: 'not found' })
      }
    }

    findOne(beautyParam)
    // eslint-disable-next-line
  }, [setBeauty])

  const { name: beautyName } = beauty

  return (
    <>
      <hr />

      <div className="beauty-details">
        <div className="avatar">:-)</div>
        <div className="real-name">Real name</div>
        <div className="insta-name">Instagam Name</div>
      </div>
      <h1>{beautyName}</h1>
      <i>
        Beauty page {beautyParam} {bootyParam} {languageParam}
      </i>

      <label htmlFor="wizards">Who's the best wizard?</label>
      <input type="text" id="wizards" name="wizards" list="wizards-list" />

      <datalist id="wizards-list">
        <option>Harry Potter</option>
        <option>Hermione</option>
        <option>Dumbledore</option>
        <option>Merlin</option>
        <option>Gandalf</option>
      </datalist>
    </>
  )
}
export default BeautyPage
