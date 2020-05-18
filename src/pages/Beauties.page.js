import React, { useEffect } from 'react'

const Beauties = () => {
  console.log('--init/Beauties')
  useEffect(() => {
    console.log('--useEffect/Beauties')
    return () => {
      console.log('--return/useEffect/Beauties')
      //alert('--return/useEffect/Beauties')
    }
  }, [])
  return <h1>Beauties</h1>
}
export default Beauties
