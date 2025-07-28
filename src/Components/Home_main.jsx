import React from "react";
import "../styles/styles.scss";
import "../styles/Home_main.scss";
import Card from "./Card";
import Logements from "/src/logements-kasa.json"


function Home_main() {
  return (
    <div>
    <div className="home-main">
      <div className="home-title">
        <h1 className="home-title-text">Chez vous, partout et ailleurs</h1>
        <img
          className="img-home-title"
          src="/src/assets/HomePage/background-img-homepage.jpg"
          alt="Photo d'une falaise"
        />
      </div>
    </div>
    <div className="cards">
      {Logements.map(card => (
        <Card
          key={card.id}
          title={card.title}
          cover={card.cover}/>
      ))}
    </div>
  
</div>
);
}

export default Home_main;
