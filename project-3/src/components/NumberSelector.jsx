
import styled from "styled-components";


const NumberSelector = ({selectedNum, setSelectedNum, error, setError}) => {

    const numberSelectorHandler = (val) =>{
        setSelectedNum(val)
        setError("")
    }


    const arrNum = [1,2,3,4,5,6]
    return ( 
        <NumberContainer>
        <p className="error">{error}</p>
        <div className="flex">

        {arrNum.map((val,i) =>(
            <Box
            isselected = {val === selectedNum}
            onClick={()=>numberSelectorHandler(val)}
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
    .error{
        color: #FF0C0C;
        font-family: 'Poppins',sans-serif;
        font-size: 18px;
        font-weight: 400;
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
    cursor: pointer;

    background-color: ${(props)=> (props.isselected? "black" : "white")};
    color: ${(props)=> (props.isselected? "#FFF" : "#000")};

`