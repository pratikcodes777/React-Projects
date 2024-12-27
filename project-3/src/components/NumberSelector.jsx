import { useState } from "react";
import styled from "styled-components";


const NumberSelector = () => {

    const [selectedNum, setSelectedNum]= useState()

    const arrNum = [1,2,3,4,5,6]
    return ( 
        <div>

        {arrNum.map((val,i) =>(
            <Box
            isselected = {val === selectedNum}
            onClick={()=>setSelectedNum(val)}
            key={i}>{val}</Box>
        )
        )}
        

        </div>
     );
}
 
export default NumberSelector;

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