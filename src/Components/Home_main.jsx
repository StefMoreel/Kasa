import React from "react";
import "../styles/styles.scss";
import "../styles/Home_main.scss";
import Card from "../components/Card.jsx";
import img_homePage from "../assets/HomePage/background-img-homepage.jpg"
import { useState, useEffect } from "react";
import { getData } from "../api/GetData";

// Composant "main" de la page d'accueil
// Affichage de l'image et du titre
// Appel du composant Card pour l'affichage des des covers et titres des logements

function Home_main() {

  const [logements, setLogements] = useState([]); 
  
  useEffect(() => {
    getData().then(setLogements);
  }, []);

  return (
    <div>
    <div className="home-main">
      <div className="home-title">
        <h1 className="home-title-text">Chez vous, partout et ailleurs</h1>
        <img
          className="img-home-title"
          src={img_homePage}
          alt="Photo d'une falaise"
        />
      </div>
    </div>
    <div className="cards">
      {logements.map(card => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          cover={card.cover}/>
      ))}
    </div>
  
</div>
);
}

export default Home_main;
