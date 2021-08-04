import React, { useEffect } from "react";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AOS from "aos";
import "./styles/App.css";


import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
