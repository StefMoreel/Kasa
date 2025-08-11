import Banner from "../components/Banner";
import React, { useState, useEffect } from "react";
import "../styles/styles.scss";
import "../styles/Banner.scss";
import "../styles/LogementDetails.scss";
import "../styles/Collapse.scss";
import Footer from "../components/Footer";
import { getData } from "../api/GetData";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Error from "./Error";


// Page de détails des logements
// Utilisation du hook useParams de reactRouter permet de retourner les datas de l'id du logement cliqué
// Gestion de la redirection vers la page d'erreur si l'id du logement n'est pas trouvé


function LogementsDetails() {
  const { id } = useParams();
    // Initialisation de l'état : 
      //  logement stockera le logement à afficher.
      //  loading est true pendant que la donnée est en train d’être chargée.
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

    // Chargement des données :
  useEffect(() => {
      // getData va charger tous les logement
    getData().then((logements) => {
        // on cherche dans le tableau celui qui correspond à l’id
      const found = logements.find((l) => l.id === id);
        // On stocke ce logement dans le state avec setLogement
      setLogement(found);
        //On met loading à false pour indiquer que le chargement est terminé.
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div>Chargement…</div>;
  if (!logement) return <Error />;
  
  return (
    <div className="App">
      <Banner />
      <div className="details-logement">
        <div className="carousel-container">
          <Carousel
            images={logement.pictures}
            alt={`photo ${logement.id + 1}`}
          />
        </div>

        <div className="container-title-location-host-container-tags-rating">
          
          <div className="container-title-location-tags">

            <div className="container-title-location">  
              <div className="logement-title">{logement.title}</div>
              <div className="logement-location"> {logement.location}</div>
            </div> 

            <div className="container-tags">
              <div className="logement-tags">
                {logement.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </div>
            </div>
          </div>
            <div className="container-host-rating">    

              <div className="logement-host">
                <div className="logement-host-name">{logement.host.name}</div>
                <div className="logement-host-picture">
                  {" "}
                  <img
                    src={logement.host.picture}
                    alt={`photo de ${logement.host.name}`}
                  />
                </div>
              </div>  
                <div className="logement-rating">
                  <Rating value={logement.rating} />
                </div>
              
            </div>  
          
          </div>
          <div className="container-description-equipments">
            <div className="logement-description">
              <Collapse
                title="Description"
                content={logement.description}
                className="collapse-description"
              />
            </div>
            <div className="logement-equipments">
              <Collapse
                title="Équipements"
                content={
                  <ul>
                    {logement.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
          
      </div>
      <Footer />
    </div>
  );
}
export default LogementsDetails;
