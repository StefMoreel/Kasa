import star_active from "../assets/Logements_Details/star-active.png";
import star_inactive from "../assets/Logements_Details/star-inactive.png";

// Composant permettant de transformer la data "rating" (string) en image

function Rating({ value, max = 5 }) {
  const rating = Number(value);
  
    return (
      <div className="logement-rating">
        {Array.from({ length: max }).map((_, index) => (
          <img 
            key={index} 
            src={index < rating ? star_active : star_inactive} 
            alt="étoile" 
            className="rating-stars"/>
        ))}
      </div>
    );
    
    }

export default Rating;