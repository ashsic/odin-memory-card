import { useState } from 'react'
import './App.css'

import Card from './components/Card'
import getKeys from './keys'
import Imagefetch from './components/Imagefetch'

function App() {
  const champions = getKeys(12);

  return (
    <>
    
      {Object.keys(champions).map((index) => {
        return <Imagefetch name={`${champions[index]}`} />
      })}


    </>
  )
}

export default App
