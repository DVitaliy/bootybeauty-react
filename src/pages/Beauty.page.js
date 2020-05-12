import React from 'react'
import { useParams } from 'react-router-dom'

//import t from 'translation'

const Beauty = () => {
  let { beauty = 'none', booty = 'none' } = useParams()
  return (
    <h1>
      Beauty page {beauty} {booty}
    </h1>
  )
}
export default Beauty
