import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
    <div className="hero d-flex justify-content-center">
      <div className="hero-container container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="intro col-md-8 text-white d-flex flex-column justify-content-center">
            <h1 className="intro-title text-white display-1">Hi, I'm Asil.</h1>
            <p className="intro-text">
              I am a self-taught, innovative, and task-driven high school senior
              and a web developer based in Turkey with 4+ years of experience in designing and
              developing responsive, user-friendly interfaces and feature-rich
              web applications. Nice to meet you!
            </p>
          </div>
          <div className="col-md-4">
            <div className="image">
              <div className="wrap-image d-flex justify-content-center">
                <img
                  src="./assets/images/asil_new_4_3.jpg"
                  className="img-fluid rounded"
                  alt="Asil Efe Akyol"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="scroll scroll-first"></div>
            <div className="scroll scroll-second"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="skew shadow-lg"></div>
    </>
  );
};

export default Hero;
