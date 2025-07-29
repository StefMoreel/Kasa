import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LogementsDetails from "./Components/LogementsDetails";
import "./styles/styles.scss";
import "./styles/Banner.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement_details/:id" element={<LogementsDetails />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
