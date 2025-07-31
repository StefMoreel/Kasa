import Banner from "../Components/Banner";
import React from 'react';
import '../styles/styles.scss';
import '../styles/Banner.scss';
import Footer from "../Components/Footer";
import Img_home_about from "../Components/Img_home_about";

function About(){
  return ( 
    <div className="App">
      <Banner />
      <Img_home_about />
      <Footer />
      </div>
    );
}
export default About;