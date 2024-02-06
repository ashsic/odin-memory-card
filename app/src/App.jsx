import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import getKeys from './keys'

function App() {
  const champions = getKeys(10);

  return (
    <>
      <h2>Champion Data</h2>
      <Card names={champions} />


    </>
  )
}

export default App
