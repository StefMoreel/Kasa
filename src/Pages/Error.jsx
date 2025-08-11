import Banner from "../components/Banner";
import React from 'react';
import '../styles/styles.scss';
import '../styles/Banner.scss';
import '../styles/Error.scss';

import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

function Error(){
  return ( 
    <div className="App">
      <Banner />
      <div className="error-page">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="home-navlink">Retourner sur la page d’accueil</NavLink>
      </div>
      <Footer />
      </div>
    );
}
export default Error;