import styled from "styled-components";

const StartGame = ({toggle}) => {
    return ( 
        <Container>
            <div>
                <img src="./images/dices.png" alt="dice picture" />
            </div>
            

            <div className="container">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
                
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


const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px;
    border-radius: 5px;
    background: #000;
    color: white;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;


    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`