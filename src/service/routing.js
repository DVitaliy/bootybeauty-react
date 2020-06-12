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

// const HomePage = React.lazy(() =>
//   delay(2000).then(() => import('../pages/HomePage'))
// )
// const BeautyPage = React.lazy(() =>
//   delay(2000).then(() => import('../pages/BeautyPage'))
// )
const HomePage = React.lazy(() => import('../pages/HomePage'))
const BeautyPage = React.lazy(() => import('../pages/BeautyPage'))

const Routing = () => {
  const { t, language } = useTranslate()

  const ROOT_PATH = '/:languageParam([a-z]{2})'
  const DEFAULT_PATH = `/${language}`

  return (
    <React.Fragment>
      <Header />
      {/* <h1>
        {t('test')} {language}
      </h1> */}
      <Suspense fallback={<div>Загрузка PAGE...</div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to={`${DEFAULT_PATH}/`} />
          </Route>

          <Route exact path={ROOT_PATH}>
            <HomePage />
          </Route>

          <Route exact path={`${ROOT_PATH}/beauties`}>
            <Beauties />
          </Route>

          <Route
            path={`${ROOT_PATH}/:beautyParam([\\w.]{4,29})/:bootyParam([0-9]{0,1})?`}
          >
            <BeautyPage />
          </Route>

          <Route>
            <h1>No match</h1>
          </Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

export default Routing
