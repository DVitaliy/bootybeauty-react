/** TODO
 * Clear logs
 * Add privat pages ex. MyPage (for Bayers, Admins, Model)
 * Make page Autorization (Login, Logout or use Passport STRATEGIES)
 * Add lazy load for pages
 *
 * work by:
 * - HomePage
 * - BeautiesPages
 * - BeautyPage
 * - NoMatchPage
 *
 * */

import React, { Suspense } from 'react'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import { Beauties } from 'pages'

//import { HomePage } from '../pages/HomePage'
import { useTranslate } from './localization'

import Header from '../components/header'

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve()
    }, ms)
  })
}

const HomePage = React.lazy(() =>
  delay(2000).then(() => import('../pages/HomePage'))
)
const BeautyPage = React.lazy(() =>
  delay(2000).then(() => import('../pages/BeautyPage'))
)
//const HomePage = React.lazy(() => import('../pages/HomePage'))

const Routing = () => {
  const { t, language } = useTranslate()

  console.log('-init/Routing')

  const ROOT_PATH = '/:languageParam([a-z]{2})'
  const DEFAULT_PATH = `/${language}`

  return (
    <React.Fragment>
      <h1>
        {t('test')} {language}
      </h1>
      <Header />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to={`${DEFAULT_PATH}/`} />
          </Route>
          {/* <Route
            exact
            path="/"
            render={routeProps => (
              <div>
                {console.log('Switch - Redirect', language, routeProps)}
                <h1>Redirect</h1>
                {language && <Redirect to={`${DEFAULT_PATH}/`} />}
              </div>
            )}
          /> */}

          <Route exact path={ROOT_PATH}>
            <HomePage />
          </Route>

          {/* <Route
            exact
            path={ROOT_PATH}
            render={routeProps => (
              <div>
                {console.log('Switch - HomePage', routeProps)}
                <h1>HomePage</h1>
              </div>
            )}
          /> */}

          <Route exact path={`${ROOT_PATH}/beauties`}>
            <Beauties />
            <Link to={`${DEFAULT_PATH}/alphachanneling`}>beauty</Link> |{' '}
            <Link to={`${DEFAULT_PATH}/alphachanneling/1234`}>booty</Link>
          </Route>

          <Route
            path={`${ROOT_PATH}/:beautyParam([\\w.]{4,29})/:bootyParam([0-9]{4})?`}
          >
            <BeautyPage />
          </Route>

          {/* <Route
            render={routeProps => (
              <div>
                {console.log('Switch - No match', routeProps)}
                <h1>No match</h1>
              </div>
            )}
          /> */}
          <Route>
            <h1>No match</h1>
          </Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

export default Routing
