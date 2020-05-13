import React from 'react'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import { Home, Beauty, Beauties } from 'pages'

import { useTranslate } from 'translation'

const NavBar = ({ children }) => {
  console.log('init NavBar')
  const { setLanguage } = useTranslate()

  return (
    <>
      <Link to="/ru/" onClick={setLanguage.bind(null, 'ru')}>
        ru
      </Link>{' '}
      |{' '}
      <Link to="/en/" onClick={setLanguage.bind(null, 'en')}>
        en
      </Link>{' '}
      | <Link to="/">Home</Link> | <Link to="/ua/beauties">Beauties</Link> |{' '}
      <Link to="/sd-sdf">ErrorHash</Link>
    </>
  )
}

const Routing = props => {
  console.log('init Routing')

  const { t, language } = useTranslate()

  // const [basename, setBasename] = useState(translate.basename)
  // console.log('translate.basename', translate.basename)
  // useEffect(() => {
  //   console.log('++translate.basename++', translate.basename)
  //   setBasename(translate.basename)
  // }, [translate.basename])

  // <BrowserRouter basename={'/' + console.log('++++', basename) + '/'}>
  // </BrowserRouter>
  const ROOT_PATH = '/(\\w{2})'
  const DEFAULT_PATH = `/${language}/`
  return (
    <>
      {console.log('render Routing')}
      <h1>{t('test')}</h1>
      <NavBar />
      <Switch>
        <Route exact path={ROOT_PATH}>
          <Home />
        </Route>
        <Route exact path={`${ROOT_PATH}/beauties`}>
          <Beauties />
          <Link to="/ru/alphachanneling">alphachanneling</Link> |{' '}
          <Link to="/en/alphachanneling/1234">123</Link>
        </Route>
        <Route path={`${ROOT_PATH}/:beauty/:booty([0-9]{4})?`}>
          <Beauty />
        </Route>

        <Route exact path="/">
          <Redirect to={DEFAULT_PATH} />
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
