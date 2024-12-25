import { useState } from "react";
import data from "./data";
import './style.css';


const Accordian = () => {
    const [selected, setSelected] = useState(null)

    const handleSingleClick =(getId) =>{
        console.log(getId)
        setSelected(getId === selected ? null : getId)
    }

    return ( 
            <div className="wrapper">
                <div className="accordian">
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            // Each item in the accordian
                            <div key={item.id} className="item">
                                <div onClick={()=>handleSingleClick(item.id)} className="title">
                                    {/* Display the question */}
                                    <h3>{item.question}</h3>
                                    {/* Expand/Collapse indicator */}
                                    <span>+</span>
                                </div>
                                {
                                    selected === item.id ?
                                    <div className="content">{item.answer}</div>
                                    : null
                                }
                            </div>
                        ))
                    ) : (
                        // Fallback when no data is available
                        <div>No data found</div>
                    )}
                </div>
            </div>
     );
}
 
export default Accordian;