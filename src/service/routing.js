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
import { Beauty, Beauties } from 'pages'

import { useTranslate } from './localization'

import Header from '../components/header'

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const HomePage = React.lazy(() =>
  delay(2000).then(() => import('../pages/HomePage'))
)

const Routing = () => {
  const { t, language } = useTranslate()

  console.log('-init/Routing')

  const ROOT_PATH = '/:language([a-z]{2})'
  const DEFAULT_PATH = `/${language}`

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      {console.log('-render/Routing')}
      <h1>
        {t('test')} {language}
      </h1>
      <Header />
      <Switch>
        <Route exact path="/">
          {language && <Redirect to={`${DEFAULT_PATH}/`} />}
        </Route>

        <Route exact path={ROOT_PATH}>
          <HomePage />
        </Route>

        <Route exact path={`${ROOT_PATH}/beauties`}>
          <Beauties />
          <Link to={`${DEFAULT_PATH}/alphachanneling`}>beauty</Link> |{' '}
          <Link to={`${DEFAULT_PATH}/alphachanneling/1234`}>booty</Link>
        </Route>

        <Route path={`${ROOT_PATH}/:beauty/:booty([0-9]{4})?`}>
          <Beauty />
        </Route>

        <Route>
          <h1>No match</h1>
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Routing
