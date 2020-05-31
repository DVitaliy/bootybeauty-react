import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useAppState } from '../service/appstate'
//import { useTranslate } from '../service/localization'

const BeautyPage = () => {
  const [, appAction] = useAppState()
  const { languageParam, beautyParam, bootyParam } = useParams()

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

  const { name: beautyName, booties = [] } = beauty

  return (
    <>
      <hr />

      <div
        className={`main-container ${
          bootyParam ? 'booty-active' : 'beauty-active'
        }`}
      >
        {/* <div className="second-container"> */}
        <div className="beauty-avatar">
          <div
            style={{ width: '100%', height: '200px', backgroundColor: 'red' }}
          >
            )
          </div>
        </div>
        <div className="beauty-description">
          <div>Real name,</div> <div>Instagam Name,</div> <div>details</div>
        </div>
        {/* </div> */}
        <div className="booty-item">Lot</div>
        <div className="booty-details">details</div>
      </div>

      <h1>
        <Link to={`/${languageParam}/${beautyParam}`}>{beautyName}</Link>
      </h1>

      <div className="beauty-booties">
        {booties.map((item, index) => (
          <div
            className={`booty ${item.id === bootyParam ? 'active' : ''}`}
            key={index}
          >
            <Link to={`/${languageParam}/${beautyParam}/${item.id}`}>
              Lot#{item.id}
            </Link>
          </div>
        ))}
      </div>

      <hr />
      <i>
        Beauty page {beautyParam} {bootyParam} {languageParam}
      </i>
    </>
  )
}
export default BeautyPage
