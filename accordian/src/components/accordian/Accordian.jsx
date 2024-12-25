import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleClick = (getId) => {
    console.log(getId);
    setSelected(getId === selected ? null : getId);
  };

  const handleMultiSelection= (getId) =>{
    let cpyMultiple = [...multiple]
    const currentIdIndex = cpyMultiple.indexOf(getId)
    if(currentIdIndex === -1) cpyMultiple.push(getId)
        else cpyMultiple.splice(currentIdIndex, 1)

    setMultiple(cpyMultiple)
  }

  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            // Each item in the accordian
            <div key={item.id} className="item">
              <div
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleClick(item.id)
                }
                className="title"
              >
                {/* Display the question */}
                <h3>{item.question}</h3>
                {/* Expand/Collapse indicator */}
                <span>+</span>
              </div>
              {
                multiSelection ? 
                multiple.indexOf(item.id) !== -1 &&
                <div className="content">{item.answer}</div> :
                selected === item.id && <div className="content">{item.answer}</div>
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
};

export default Accordian;
