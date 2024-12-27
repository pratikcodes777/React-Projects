import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from './RollDice'
import { useState } from "react";


const GamePlay = () => {
    const [selectedNum, setSelectedNum]= useState()
    const [currentDice, setCurrentDice] = useState(1)


    return ( 
        <MainContainer>
            <div className="top_section">
                <TotalScore></TotalScore>
                <NumberSelector 
                selectedNum={selectedNum}
                setSelectedNum={setSelectedNum}
                ></NumberSelector>
            </div>
        <RollDice
        currentDice={currentDice}
        setCurrentDice= {setCurrentDice}
        ></RollDice>
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

`