import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from './RollDice'
import { useState } from "react";
import {Button, OutlinedButton} from './styled/Button' ;
import Rules from "./Rules";




const GamePlay = () => {
    const[totalScore, setTotalScore] = useState(0)
    const [selectedNum, setSelectedNum]= useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)


    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }

      const rollDice = () =>{
        if(!selectedNum) {
            setError("You have not selected any number")
            return
        }

        const randomNumber = getRandomNumber(1,7)
        setCurrentDice((prev)=> randomNumber)

        if(selectedNum === randomNumber){
            setTotalScore((prev)=> prev + randomNumber)
        } else{
            setTotalScore((prev)=> prev - 2)
        }
        setSelectedNum(undefined)
      }

      const resetScore = () =>{
        setTotalScore(0)
      }

    return ( 
        <MainContainer>
            <div className="top_section">
                <TotalScore totalscore={totalScore}></TotalScore>
                <NumberSelector 
                setError={setError}
                error={error}
                selectedNum={selectedNum}
                setSelectedNum={setSelectedNum}
                ></NumberSelector>
            </div>
        <RollDice
        currentDice={currentDice}
        rollDice= {rollDice}
        ></RollDice>
        <div className="btns">
            <OutlinedButton onClick={resetScore}>Reset Score</OutlinedButton>
            <Button 
            onClick={()=>setShowRules((prev)=> !prev)}>{showRules ? "Hide": "Show"} Rules</Button>
        </div>

       {showRules && <Rules />} 
        </MainContainer>
     );
}
 
export default GamePlay;

const MainContainer = styled.main`
    padding-top: 70px;

    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

`