import React, { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useAppState } from '../service/appstate'
import '../styles/NavBar.css'

//https://codepen.io/mrmlnc/pen/gpKbXM

const NavBar = () => {
  let { languageParam } = useParams()
  const [appState, appAction] = useAppState()
  const { auth } = appState
  const { isAuthorized } = auth

  const refContainer = useRef(null)
  useEffect(() => {
    let timerTimeout
    const headlerScroll = e => {
      if (timerTimeout) clearTimeout(timerTimeout)
      timerTimeout = setTimeout(() => {
        if (window.pageYOffset)
          refContainer.current.classList.add('is-scrolled')
        else refContainer.current.classList.remove('is-scrolled')
      }, 100)
    }
    window.addEventListener('scroll', headlerScroll)
    return () => window.removeEventListener('scroll', headlerScroll)
  }, [])

  const onButtonClick = e => {
    refContainer.current.classList.toggle('active')

    // e.currentTarget.classList.toggle('-active')
    // e.currentTarget.previousElementSibling.classList.toggle('-on')
  }
  const headlerCloseNavBar = e => {
    //onButtonClick()
  }

  return (
    <div className="navbar-component" ref={refContainer}>
      <div className="navbar">
        <Link to="/" className="brand">
          Brand
        </Link>
        <nav role="navigation" className="list" onClick={headlerCloseNavBar}>
          <a href="#" className="item -link">
            Home
          </a>
          <a href="#" className="item -link">
            Articles
          </a>
          <a href="#" className="item -link">
            Projects
          </a>
          <Link to={`/${languageParam}/notfound`} className="item -link">
            notfound
          </Link>
          {isAuthorized ? <button>Logout</button> : <button>Login</button>}
        </nav>
        <button className="toggle" onClick={onButtonClick}>
          <span className="icon" />
        </button>
      </div>
    </div>
  )
}
export default NavBar
