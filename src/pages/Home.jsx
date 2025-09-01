import Banner from "../components/Banner.jsx";
import React from 'react';
import '../styles/styles.scss';
import '../styles/Banner.scss';
import Footer from "../components/Footer.jsx";
import '../styles/Footer.scss';
import Home_main from "../components/Home_main.jsx";

function Home(){
  return ( 
    <div className="App">
      <Banner />
      <Home_main />
      <Footer />
      </div>
    );
}
export default Home;