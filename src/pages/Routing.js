import React from 'react'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import { Home, Beauty, Beauties } from 'pages'

import { useTranslate } from '../components/localization'
import Header from '../components/header'

const Routing = () => {
  console.log('-init/Routing')
  const { t = _ => _, language = 'unknow' } = useTranslate()

  const ROOT_PATH = '/:language([a-z]{2})'
  const DEFAULT_PATH = `/${language}`

  return (
    <>
      {console.log('-render/Routing')}
      <h1>
        {t('test')} {language}
      </h1>
      <Header />
      <Switch>
        <Redirect exact from="/" to={`${DEFAULT_PATH}/`} />

        <Route exact path={ROOT_PATH}>
          <Home />
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
    </>
  )
}

export default Routing
