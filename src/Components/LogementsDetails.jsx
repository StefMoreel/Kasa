import Banner from "./Banner";
import React from "react";
import "../styles/styles.scss";
import "../styles/Banner.scss";
import "../styles/LogementDetails.scss";
import "../styles/Collapse.scss";
import Footer from "./Footer";
import Logements from "/src/logements-kasa.json";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Rating from "./Rating";
import Collapse from "./Collapse";
import Error from "../Pages/Error";


function LogementsDetails() {
  const { id } = useParams();
  const logement = Logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }
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
