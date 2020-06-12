import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useAppState } from '../service/appstate'
import '../styles/NavBar.css'

//https://codepen.io/mrmlnc/pen/gpKbXM

const NavBar = () => {
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

  return (
    <div className="navbar-component" ref={refContainer}>
      <div className="navbar">
        <Link to="/" className="brand">
          Brand
        </Link>
        <nav role="navigation" className="list">
          <a href="#" className="item -link">
            Home
          </a>
          <a href="#" className="item -link">
            Articles
          </a>
          <a href="#" className="item -link">
            Projects
          </a>
        </nav>
        <button className="toggle" onClick={onButtonClick}>
          <span className="icon" />
        </button>
      </div>
    </div>
  )
}
export default NavBar
