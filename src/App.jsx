import React, { useEffect } from "react";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/App.css";

import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    let nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 50) {
        nav.classList.add("bg-dark", "shadow");
      } else {
        nav.classList.remove("bg-dark", "shadow");
      }
    });
  });

  return (
    <div className="App">
        <Navbar />
        <div className="hero">
          <Card />
        </div>
        <div className="skew shadow-lg"></div>
        <p>adf</p>
        <p>adf</p>
        <p>adf</p>
    </div>
  );
}

export default App;
