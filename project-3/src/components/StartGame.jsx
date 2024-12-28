import styled from "styled-components";
import {Button} from './styled/Button' ;
import { useNavigate } from 'react-router-dom';

const StartGame = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/gameplay'); // Navigate to GamePlay page
      };
    return ( 
        <Container>
            <div>
                <img src="./images/dices.png" alt="dice picture" />
            </div>
            

            <div className="container">
                <h1>DICE GAME</h1>
                {/* <Button onClick={toggle}>Play Now</Button> */}
                <Button onClick={handleStart}>Play Now</Button>
                
            </div>
        </Container>
     );
}
 
export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    gap: 5px;

    .container{
        display: flex;
        flex-direction: column;
        
        h1{
            color: #000;
            font-family: "Poppins", sans-serif;
            font-size: 96px;
            font-weight: 700;
            white-space: nowrap;

        }
        Button {
        align-self: flex-end; 
    }
    }

`

