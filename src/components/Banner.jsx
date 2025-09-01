import React from "react";
import "../styles/styles.scss";
import "../styles/Banner.scss";
import { NavLink } from "react-router-dom";
import logoKasaRed from "../assets/Logos/logo-kasa-red.png"

// Composant du header de chaque page de l'application

function Banner() {
  return (
    <div className="banner">
      <img
        src={logoKasaRed}
        alt="Kasa Logo"
        className="banner-logo"
      />
      <nav className="banner-nav">
          <NavLink to="/" className="home-link">Accueil</NavLink>
          <NavLink to="/about" className="about-link">A propos</NavLink>
      </nav>
    </div>
  );
}

export default Banner;
