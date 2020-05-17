import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useAppState } from '../service/appstate'

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
  console.log('--init/Home', useAppState())

  let { language } = useParams()
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
      <h1>Home page {language}</h1>
      <Suspense fallback={<div>Загрузка...</div>}>
        {isAuthorized && <StatisticPrivat />}
      </Suspense>
      {beauties.isError && <div>Something went wrong ...</div>}
      {beauties.isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {beauties.data.map((item, index) => (
            <h3 key={index}>{item.name}</h3>
          ))}
        </div>
      )}
      <button onClick={handleClickAsync} disabled={beauties.isLoading}>
        callAsync
      </button>
      <button onClick={handleClickSync}>callSync</button>
      <button onClick={() => appAction.beauties.func1()}>func1</button>
    </React.Fragment>
  )
}
export default HomePage
