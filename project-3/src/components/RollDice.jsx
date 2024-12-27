import { useState } from "react";
import styled from "styled-components";

const RollDice = () => {

    const [currentDice, setCurrentDice] = useState(1)

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }

      const rollDice = () =>{
        const randomNumber = getRandomNumber(1,7)

        setCurrentDice((prev)=> randomNumber)
      }

    return ( 
       < DiceContainer>
            <div 
            onClick={rollDice}
            className="dice">
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1 png" />
            </div>
            <p>Click on Dice to roll</p>
       </ DiceContainer>
        
     );
}
 
export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    p{
        color: #000;
        font-family: Poppins;
        font-size: 24px;
        font-weight: 500;
    }

    .dice{
        cursor: pointer;
    }
    
`