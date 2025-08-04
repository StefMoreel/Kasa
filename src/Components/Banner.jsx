import React from "react";
import "../styles/styles.scss";
import "../styles/Banner.scss";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <img
        src="/src/assets/Logos/logo-kasa-red.png"
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
