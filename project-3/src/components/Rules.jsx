import styled from "styled-components";

const Rules = () => {
    return ( 
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </RulesContainer>
     );
}
 
export default Rules;

const RulesContainer = styled.div`
        background: #FBF1F1;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 5px;

        h2{
            color: #000;
            font-family: "Poppins" , sans-serif;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 25px;
        }

        p{
            color: #000;
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            font-weight: 500;
        }
`   