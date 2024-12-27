
import styled from "styled-components";


const NumberSelector = ({selectedNum, setSelectedNum}) => {


    const arrNum = [1,2,3,4,5,6]
    return ( 
        <NumberContainer>
        <div className="flex">

        {arrNum.map((val,i) =>(
            <Box
            isselected = {val === selectedNum}
            onClick={()=>setSelectedNum(val)}
            key={i}>{val}</Box>
        )
        )}
        </div>
        <p>Select Number</p>
        </NumberContainer>
       
     );
}
 
export default NumberSelector;

const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .flex{
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }
    p{
        color: #000;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 700;

    }

    
`

const Box = styled.div`
    border: 1px solid #000;
    background: #FFF;
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;

    color: #000;
    font-family: "Poppins";
    font-size: 24px;
    font-weight: 700;

    background-color: ${(props)=> (props.isselected? "black" : "white")};
    color: ${(props)=> (props.isselected? "#FFF" : "#000")};

`