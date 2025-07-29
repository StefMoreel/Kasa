import { useState } from "react";
import React from "react";
import "/src/styles/styles.scss";
import "/src/styles/LogementDetails.scss";

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
      {images.length > 1 && (
        <button className="carousel-button prev" onClick={prevImage}>
          <img src="/src/assets/Logements_Details/carousel_prev.png" />
        </button>
      )}
      <img className="logement-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {images.length > 1 && (
        <button className="carousel-button next" onClick={nextImage}>
          <img src="/src/assets/Logements_Details/carousel_next.png" alt="" />
        </button>
      )}
    </div>
  );
}

export default Carousel;