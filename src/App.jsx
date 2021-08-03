import React from "react";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
