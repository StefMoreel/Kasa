import React from "react";
import "/src/styles/styles.scss";
import "/src/styles/Card.scss"


function Card({ title, cover}) {
    return (
        <div className="card">
            <img className="card-cover" src={cover} alt={title} />
            <h2 className="card-title">{title}</h2> 
            
        </div>
    );
}

export default Card;
