
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'
// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  // const [isGameStarted, setIsGameStarted] = useState(false)

  // const toggleGameMode = () =>{
  //   setIsGameStarted((prev) => !prev)
  // }

  return (
    // <div className="App">
    //   {isGameStarted?<GamePlay></GamePlay>:<StartGame toggle={toggleGameMode}></StartGame>}
    // </div>

    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/gameplay" element={<GamePlay />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
