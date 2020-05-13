import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import { Home, Beauty, Beauties } from 'pages'

import { useTranslate } from 'translation'

const NavBar = ({ children }) => {
  console.log('init NavBar')

  return (
    <>
      <a href="#lng=ru">ru</a> | <Link to="#lng=en">en</Link> |{' '}
      <Link to="/">Home</Link> | <Link to="/beauties">Beauties</Link> |{' '}
      <Link to="/sd-sdf#24234">ErrorHash</Link>
    </>
  )
}

const Routing = props => {
  console.log('init Routing')

  const t = useTranslate()

  // const [basename, setBasename] = useState(translate.basename)
  // console.log('translate.basename', translate.basename)
  // useEffect(() => {
  //   console.log('++translate.basename++', translate.basename)
  //   setBasename(translate.basename)
  // }, [translate.basename])

  // <BrowserRouter basename={'/' + console.log('++++', basename) + '/'}>
  // </BrowserRouter>
  return (
    <>
      {console.log('render Routing')}
      <h1>{t('test')}</h1>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/beauties">
          <Beauties />
          <Link to="/alphachanneling">alphachanneling</Link> |{' '}
          <Link to="/alphachanneling/1234">123</Link>
        </Route>
        <Route path="/:beauty/:booty([0-9]{4})?">
          <Beauty />
        </Route>
        <Route>
          <h1>No match</h1>
        </Route>
      </Switch>
      <Link to="/ru/">en Home</Link> |{' '}
      <Link to="/ru/beauties">en Beauties</Link>
    </>
  )
}

export default Routing
