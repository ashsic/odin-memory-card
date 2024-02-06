import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import getKeys from './keys'


function App() {
  const champions = getKeys(12);

  return (
    <>
      <h2>Champion Data</h2>
      <Card names={champions} />
      {/* {Object.keys(champions).map((index) => {
        return <Card name={`${champions[index]}`} />
      })} */}


    </>
  )
}

export default App



// {<Card names={champions} />}