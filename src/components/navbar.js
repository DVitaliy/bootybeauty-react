import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { useAppState } from '../service/appstate'
import '../styles/NavBar.css'

//https://codepen.io/mrmlnc/pen/gpKbXM

const NavBar = () => {
  const onButtonClick = e => {
    e.currentTarget.classList.toggle('-active')
    e.currentTarget.previousElementSibling.classList.toggle('-on')
  }

  return (
    <div className="navbar-component">
      <div className="navbar area">
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
