import { useState } from "react";
import data from "./data";

const Accordian = () => {
    const [selected, setSelected] = useState(null)

    return ( 
            <div className="wrapper">
                <div className="accordian">
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            // Each item in the accordian
                            <div key={item.id} className="item">
                                <div className="title">
                                    {/* Display the question */}
                                    <h3>{item.question}</h3>
                                    {/* Expand/Collapse indicator */}
                                    <span>+</span>
                                </div>
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