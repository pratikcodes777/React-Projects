import styled from "styled-components";

const TotalScore = ({totalscore}) => {
    return ( 
            <ScoreContainer>
                <h1>{totalscore}</h1>
                <p>Total Score</p>
            </ScoreContainer>
     );
}
 
export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 220px;
    text-align: center;
    h1{
        color: #000;
        font-family: "Poppins", sans-serif;
        font-size: 100px;
        font-weight: 600;
        line-height: 100px;
    }

    p{
        color: #000;
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
    }


    

`