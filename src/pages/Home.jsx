import Banner from "../components/Banner";
import React from 'react';
import '../styles/styles.scss';
import '../styles/Banner.scss';
import Footer from "../components/Footer";
import '../styles/Footer.scss';
import Home_main from "../Components/Home_main";

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