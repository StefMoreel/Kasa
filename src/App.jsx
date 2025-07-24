import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Logements from "./Pages/Logements";
import "./styles/styles.scss";
import "./styles/Banner.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
