import { useState } from "react";
import React from "react";
import "/src/styles/styles.scss";
import "/src/styles/LogementDetails.scss";
import PrevArrow from "../assets/Logements_Details/carousel_prev.png";
import NextArrow from "../assets/Logements_Details/carousel_next.png";

// Composant permettant l'affichage des flèches précédentes et suivantes et le compteur d'image
// Au clic sur les flèches on parcours les images correspondantes au logement courant
// Si le logement n'a qu'une seule image, les flèches et le compteur ne sont pas affichés

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (

    <div className="carousel">

      {images.length > 1 ? (
        <button className="carousel-button prev" onClick={prevImage}>
          <img src={PrevArrow} alt="précédent"/>
        </button>
        ) 
        : null
      }
        
        <img className="logement-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      
      {images.length > 1 ? (
        <button className="carousel-button next" onClick={nextImage}>
          <img src={NextArrow} alt="suivant" />
        </button>
        )
        : null
      }
      
      {images.length > 1 ? (
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
      )
      : null
    }
    </div>
  );
}

export default Carousel;