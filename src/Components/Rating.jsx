function Rating({ value, max = 5 }) {
  const rating = Number(value);
  
    return (
      <div className="logement-rating">
        {Array.from({ length: max }).map((_, index) => (
          <img key={index} src={index < rating ? "/src/assets/Logements_Details/star-active.png" : "/src/assets/Logements_Details/star-inactive.png"} alt="étoile" className="rating-stars"/>
        ))}
      </div>
    );
    
    }

export default Rating;