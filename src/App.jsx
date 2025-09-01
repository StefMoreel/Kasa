import React from "react";
import Home from "./pages/Home.jsx.jsx";
import About from "./pages/About.jsx.jsx";
import LogementsDetails from "./pages/LogementsDetails.jsx.jsx";
import Error from "./pages/Error.jsx.jsx";
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
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
