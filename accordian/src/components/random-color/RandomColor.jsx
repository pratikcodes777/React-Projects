import { useState } from "react";

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    const randomColorUtility = (length) =>{
        return Math.floor(Math.random()* length)
    }

    const createHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#"

        for(let i=0; i<6 ; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }

        console.log(hexColor)
        setColor(hexColor)

    }

    const createRgbColor = () => {
        
    }



    return ( 
        <div style={{
            height: '100vh',
            width:'100vw',
            background: color
        }}>
            <button onClick={() =>setTypeOfColor('hex')}>Generate HEX code</button>
            <button onClick={() =>setTypeOfColor('rgb')}>Generate RGB code</button>
            <button onClick={typeOfColor === 'hex' ? createHexColor : createRgbColor}>Generate random color</button>
        </div>
     );
}
 
export default RandomColor;