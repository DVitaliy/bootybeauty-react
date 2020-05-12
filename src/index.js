import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routing from 'pages/Routing'
//import API from "service/api";
import t, { setTranslate } from 'translation'
import 'styles.css'

document.title = t('app.title')

//console.log(useLocation())

render(
  <React.StrictMode>
    <BrowserRouter basename={setTranslate()}>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
