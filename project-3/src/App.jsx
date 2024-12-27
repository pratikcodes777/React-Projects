import styled from 'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'
import { useState } from 'react'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGameMode = () =>{
    setIsGameStarted((prev) => !prev)
  }

  return (
    <div className="App">
      {isGameStarted?<GamePlay></GamePlay>:<StartGame toggle={toggleGameMode}></StartGame>}
    </div>
  )
}

export default App
