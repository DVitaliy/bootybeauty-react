import React from 'react'
import { Link } from 'react-router-dom'

import { useAuthentication } from '../../service/authentication'

import { useAppState } from '../../service/appstate'

const NavBar = ({ children }) => {
  console.log('--init/NavBar')
  const { isAuthorized } = useAuthentication()
  const [appState] = useAppState()
  const { beauties } = appState
  return (
    <React.Fragment>
      <Link to="/">Home</Link> | <Link to="/ua/beauties">Beauties</Link> |{' '}
      <Link to="/sd-sdf">ErrorHash</Link> | <Link to="/fr/">FR home</Link> |{' '}
      <Link to="/fr/beauties">FR beauties</Link> |{' '}
      <Link to="/ua/">UA home</Link> |{' '}
      <Link to="/ua/beauties">UA beauties</Link> |{' '}
      <Link to="/ru/">RU home</Link> |{' '}
      <Link to="/ru/beauties">RU beauties</Link> |{' '}
      {isAuthorized ? <span>Authorized!</span> : <span>No Authorized</span>}
      <div>
        {beauties.isLoading ? (
          <div>Loading ...</div>
        ) : (
          <div>
            {beauties.data.map((item, index) => (
              <h3 key={index}>{item.name}</h3>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

const Header = () => {
  return <NavBar />
}
export default Header
