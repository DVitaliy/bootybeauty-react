import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppState } from '../service/appstate'

const Home = () => {
  console.log('--init/Home', useAppState())

  let { language } = useParams()
  const [appState, appAction] = useAppState()

  // List of beauties
  const { beauties } = appState

  const handleClick = async evt => {
    try {
      const data = await appAction.beauties.add('SAME DAAT')
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <h1>Home page {language}</h1>
      {beauties.isError && <div>Something went wrong ...</div>}
      {beauties.isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {beauties.data.map((item, index) => (
            <h3 key={index}>{item.name}</h3>
          ))}
        </div>
      )}
      <button onClick={handleClick}>add</button>
    </React.Fragment>
  )
}
export default Home
