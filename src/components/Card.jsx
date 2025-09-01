import React from "react";
import "/src/styles/styles.scss";
import "/src/styles/Card.scss"
import { Link } from "react-router-dom";

// Composant pour l'affichage dynamique des covers et des titres de chaque logement sur la page d'accueil
// Balise "Link" pour la redirection vers la page de détail du logement cliqué Route path LogementDetails avec l'id du logement

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
