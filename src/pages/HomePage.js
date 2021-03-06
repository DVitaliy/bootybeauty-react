import React, { Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppState } from '../service/appstate'
import SvgBeauty from '../components/svg-beauty'

import '../styles/HomePage.css'

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const StatisticPrivat = React.lazy(() =>
  delay(2000).then(() => import('../components/statistic.privat'))
)

const HomePage = () => {
  let { languageParam } = useParams()
  const [appState, appAction] = useAppState()

  // List of beauties
  const { beauties, auth } = appState
  const { isAuthorized } = auth

  const handleClickAsync = async () => {
    try {
      const data = await appAction.beauties.callAsync('callAsync')
      console.log('handleClickAsync', data)
    } catch (e) {
      console.log('error handleClickAsync', e)
    }
  }

  const handleClickSync = () => {
    appAction.beauties.callSync()
    console.log('handleClickSync', beauties)
  }

  return (
    <React.Fragment>
      <section className="main-container">
        <div className="header-container">
          <h1>Site information</h1>
        </div>
        <div className="backgr-container">
          <SvgBeauty />
        </div>
      </section>

      {isAuthorized && (
        <Suspense fallback={<div>Загрузка StatisticPrivat...</div>}>
          <StatisticPrivat />
        </Suspense>
      )}

      {beauties.isError && <div>Something went wrong ...</div>}
      {beauties.isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {beauties.data.map((item, index) => (
            <Link key={index} to={`/${languageParam}/${item.name}`}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
      <Link to={`/${languageParam}/notfound`}>notfound_model</Link>
      <button onClick={handleClickAsync} disabled={beauties.isLoading}>
        callAsync
      </button>

      <button onClick={handleClickSync}>callSync</button>
    </React.Fragment>
  )
}
export default HomePage
