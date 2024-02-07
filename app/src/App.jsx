import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import getKeys from './keys'

function App() {
  const champions = getKeys(10);

  return (
    <>
      <h1>LoL Memory Game</h1>
      <Card names={champions} />


    </>
  )
}

export default App
