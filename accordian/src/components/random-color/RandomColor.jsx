import { useEffect, useState } from "react";

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
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r} , ${g}, ${b})`)
        
    }

    useEffect(()=>{
        if (typeOfColor === 'rgb') createRgbColor();
        else createHexColor();
    }, [typeOfColor])



    return ( 
        <div style={{
            height: '100vh',
            width:'100vw',
            background: color
        }}>
            <button onClick={() =>setTypeOfColor('hex')}>Generate HEX code</button>
            <button onClick={() =>setTypeOfColor('rgb')}>Generate RGB code</button>
            <button onClick={typeOfColor === 'hex' ? createHexColor : createRgbColor}>Generate random color</button>

            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#fff",
                fontSize:"50px",
                marginTop:"50px",
                flexDirection:"column",
                gap:"20px"
            }}>
                <h3>{typeOfColor === 'hex'? "Hex Color" : "Rgb Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
     );
}
 
export default RandomColor;