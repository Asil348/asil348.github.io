import React, { useEffect } from "react";
import "../styles/Navbar.css";

let expanded = false;

const expandedNavbar = () => {
  let nav = document.querySelector("nav");

  expanded = !expanded;

  if (expanded) {
    nav.classList.add("bg-dark", "shadow-lg");
  } else {
    nav.classList.remove("bg-dark", "shadow-lg");
  }
};

const Navbar = () => {
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
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          Asil Efe Akyol
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={expandedNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
