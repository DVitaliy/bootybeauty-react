import React, { useEffect } from 'react'

const Beauties = () => {
  useEffect(() => {
    console.log('useEffect Beauties')
    return () => {
      console.log('return useEffect Beauties')
    }
  })
  return <h1>Beauties</h1>
}
export default Beauties
