import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Localization } from './components/localization'
import { Authentication } from './components/authentication'

import Routing from './pages/Routing'
//import API from "./service/api";
import 'styles.css'

render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
      <Authentication>
        <Localization
          settings={{
            byDefault: process.env.APP_LOCALIZATION
          }}
        >
          <Routing />
        </Localization>
      </Authentication>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
