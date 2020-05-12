import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routing from 'pages/Routing'
//import API from "service/api";
import t, { getLanguage } from 'translation'
import 'styles.css'

document.title = t('app.title')

render(
  <React.StrictMode>
    <BrowserRouter basename={getLanguage()}>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
