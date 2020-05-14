import React from 'react'
import { Link } from 'react-router-dom'

import { useAuthentication } from '../../service/authentication'

const NavBar = ({ children }) => {
  console.log('--init/NavBar')
  const { isAuthorized } = useAuthentication()

  return (
    <>
      <Link to="/">Home</Link> | <Link to="/ua/beauties">Beauties</Link> |{' '}
      <Link to="/sd-sdf">ErrorHash</Link> | <Link to="/fr/">FR home</Link> |{' '}
      <Link to="/fr/beauties">FR beauties</Link> |{' '}
      <Link to="/ua/">UA home</Link> |{' '}
      <Link to="/ua/beauties">UA beauties</Link> |{' '}
      <Link to="/ru/">RU home</Link> |{' '}
      <Link to="/ru/beauties">RU beauties</Link> |{' '}
      {isAuthorized ? <span>Authorized!</span> : <span>No Authorized</span>}
    </>
  )
}

const Header = () => {
  return <NavBar />
}
export default Header
