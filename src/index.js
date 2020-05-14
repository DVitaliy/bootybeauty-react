import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Localization } from './service/localization'
import { Authentication } from './service/authentication'

import Routing from './service/Routing'
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
