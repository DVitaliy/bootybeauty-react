// TODO

import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Localization } from './service/localization'

import { AppState } from './service/appstate'
import Routing from './service/routing'
import API from './service/api'

import 'styles.css'

const api = new API({ host: process.env.REACT_APP_HOST_BACKEND })

render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
      <Localization
        settings={{
          byDefault: process.env.REACT_APP_LOCALIZATION
        }}
      >
        <AppState
          settings={{
            api
          }}
        >
          <Routing />
        </AppState>
      </Localization>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
