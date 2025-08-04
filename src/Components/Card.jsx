import React from "react";
import "/src/styles/styles.scss";
import "/src/styles/Card.scss"
import { Link } from "react-router-dom";


function Card({id, title, cover}) {
    return (

        <Link to={`/logement_details/${id}`} className="card-link">
            <div className="card">
                <div className="gradient"></div>
                <img className="card-cover" src={cover} alt={title} />
                <h2 className="card-title">{title}</h2> 
            </div>
        </Link>
    );
}

export default Card;
