import React from 'react'
import { useParams } from 'react-router-dom'
//import t from 'translation'

const Home = () => {
  console.log('--init/Home')
  let { language } = useParams()

  return <h1>Home page {language}</h1>
}
export default Home
