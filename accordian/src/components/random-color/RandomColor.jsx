import { useState } from "react";

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")


    return ( 
        <div style={{
            height: '100vh',
            width:'100vw',
            background: color
        }}>
            <button>Generate HEX code</button>
            <button>Generate RGB code</button>
            <button>Generate random color</button>
        </div>
     );
}
 
export default RandomColor;