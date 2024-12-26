import styled from "styled-components";

const StartGame = () => {
    return ( 
        <Container>
            <div>
                <img src="./images/dices.png" alt="dice picture" />
            </div>
            

            <div>
                <Heading>DICE GAME</Heading>
                <Button>Play Now</Button>
                
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

`

const Heading = styled.h1`
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: 76px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px;
    border-radius: 5px;
    background: #000;
    color: white;
    border: none;
`