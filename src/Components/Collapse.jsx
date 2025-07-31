import { useState } from "react";
import { Collapse as ReactCollapse } from "react-collapse";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="collapse">
        <h2 className="collapse-title-text">{title}</h2>
        <button className="collapse-button" onClick={toggleCollapse}>
          <img
            src={
              isOpen
                ? "/src/assets/Logements_Details/collapse_arrow_open.png"
                : "/src/assets/Logements_Details/collapse_arrow_close.png"
            }
            alt="collapse arrow"  
          />
        </button>
      </div>
      <div>
        <ReactCollapse isOpened={isOpen}>
        <div className="collapse-content">{content}</div>
        </ReactCollapse>
      </div>
    </>
  );
}

export default Collapse;
