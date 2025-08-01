import { useRef, useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse">
        <h2 className="collapse-title-text">{title}</h2>
        <button className="collapse-button" onClick={toggleCollapse}>
          <img
            className={isOpen ? "rotated" : ""}
            src="/src/assets/Logements_Details/collapse_arrow_open.png"
            alt="collapse arrow"  
          />
        </button>
      </div>
     <div
        className={`collapse-content${isOpen ? " is-open" : ""}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? contentRef.current
              ? contentRef.current.scrollHeight + "px"
              : "999px"
            : "0px"
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Collapse;
