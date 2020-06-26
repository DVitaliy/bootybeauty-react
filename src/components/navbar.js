import React, { useEffect, useRef } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { useAppState } from '../service/appstate'
import { useTranslate } from '../service/localization'
import '../styles/NavBar.css'

const MenuLink = ({ children, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })

  return (
    <Link to={to} className={(match ? '-active ' : '') + 'item -link'}>
      {children}
    </Link>
  )
}
const NavBar = () => {
  const { t, language } = useTranslate()
  const [appState, appAction] = useAppState()
  const { auth } = appState
  const { isAuthorized } = auth

  const refContainer = useRef(null)
  useEffect(() => {
    let timerTimeout
    const rootEl = document.getElementById('root')
    const headlerScroll = e => {
      if (timerTimeout) clearTimeout(timerTimeout)
      timerTimeout = setTimeout(() => {
        if (rootEl.scrollTop) refContainer.current.classList.add('is-scrolled')
        else refContainer.current.classList.remove('is-scrolled')
      }, 100)
    }
    rootEl.addEventListener('scroll', headlerScroll)
    return () => rootEl.removeEventListener('scroll', headlerScroll)
  }, [])

  const onButtonClick = e => {
    refContainer.current.classList.toggle('active')

    // e.currentTarget.classList.toggle('-active')
    // e.currentTarget.previousElementSibling.classList.toggle('-on')
  }
  const headlerCloseNavBar = e => {
    e.stopPropagation()
    if (e.target.tagName !== 'NAV')
      refContainer.current.classList.remove('active')
    //onButtonClick()
    // e.persist()
    // console.log(e)
  }

  return (
    <div className="navbar-component" ref={refContainer}>
      <div className="navbar">
        <Link to={`/${language}/`} className="brand">
          Brand
        </Link>
        <nav role="navigation" onClick={headlerCloseNavBar}>
          <MenuLink to={`/${language}/`} activeOnlyWhenExact={true}>
            Home
          </MenuLink>
          <MenuLink to={`/${language}/beauties`} activeOnlyWhenExact={true}>
            Beauties
          </MenuLink>
          {isAuthorized ? (
            <button>Logout</button>
          ) : (
            <button onClick={e => e.stopPropagation()}>Login</button>
          )}
        </nav>
        <button className="toggle" onClick={onButtonClick}>
          <span className="icon" />
        </button>
      </div>
    </div>
  )
}
export default NavBar
