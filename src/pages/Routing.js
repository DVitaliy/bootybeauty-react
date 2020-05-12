import React, { useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import { Home, Beauty, Beauties } from 'pages'

export default function Routing() {
  useEffect(() => {
    console.log('useEffect Routing')
    return () => {
      console.log('return useEffect Routing')
    }
  })
  return (
    <>
      <a href="#lng=ru">ru</a> | <Link to="#lng=en">en</Link> |{' '}
      <Link to="/">Home</Link> | <Link to="/beauties">Beauties</Link> |{' '}
      <Link to="/sd-sdf#24234">ErrorHash</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/beauties">
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
    </>
  )
}
