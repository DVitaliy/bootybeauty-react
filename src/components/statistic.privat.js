import React from 'react'
console.log('       React.lazy StatisticPrivat')
const StatisticPrivat = () => {
  return (
    <>
      <h1>This is privat content</h1>

      <label htmlFor="wizards">Who's the best wizard?</label>
      <input type="text" id="wizards" name="wizards" list="wizards-list" />
      <datalist id="wizards-list">
        <option>Harry Potter</option>
        <option>Hermione</option>
        <option>Dumbledore</option>
        <option>Merlin</option>
        <option>Gandalf</option>
      </datalist>
    </>
  )
}
export default StatisticPrivat
