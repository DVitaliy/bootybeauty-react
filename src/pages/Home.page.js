import React, { useEffect } from 'react'

import t from 'translation'

const Home = () => {
  useEffect(() => {
    console.log('Home page', process.env)
    return () => {
      console.log('return Home page')
    }
  })
  return (
    <h1>
      Home page {`${t('app.title')}`} {t('app.title')}
    </h1>
  )
}
export default Home
