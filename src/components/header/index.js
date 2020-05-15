import React from 'react'
import { Link } from 'react-router-dom'

import { useAppState } from '../../service/appstate'

const NavBar = ({ children }) => {
  console.log('--init/NavBar')
  const [appState, appAction] = useAppState()
  const { beauties, auth } = appState
  const { isAuthorized } = auth

  return (
    <React.Fragment>
      <Link to="/">Home</Link> | <Link to="/ua/beauties">Beauties</Link> |{' '}
      <Link to="/sd-sdf">ErrorHash</Link> | <Link to="/fr/">FR home</Link> |{' '}
      <Link to="/fr/beauties">FR beauties</Link> |{' '}
      <Link to="/ua/">UA home</Link> |{' '}
      <Link to="/ua/beauties">UA beauties</Link> |{' '}
      <Link to="/ru/">RU home</Link> |{' '}
      <Link to="/ru/beauties">RU beauties</Link> |{' '}
      {isAuthorized ? (
        <span>
          Authorized!
          <button onClick={() => appAction.auth.clearTokensSync()}>
            logout
          </button>
        </span>
      ) : (
        <span>
          No Authorized{' '}
          <button
            onClick={() =>
              appAction.auth.authenticationSync({
                accessToken: 'token',
                refreshToken: 'token'
              })
            }
          >
            login
          </button>
        </span>
      )}
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
