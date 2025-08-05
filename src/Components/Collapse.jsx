import { useRef, useState } from "react";
import collapseArrow from "../assets/Logements_Details/collapse_arrow_open.png"

// Composant de création du collapse
// Au clic sur le bouton, animation de rotation de la flèche à 180deg, ouverture du collapse et affichage du contenu récupéré depuis le json

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
            src={collapseArrow}
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
