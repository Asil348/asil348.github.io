import React from "react";
import "../styles/Hero.css";

const Card = () => {
  return (
    <div className="hero">
      <div className="card-container container">
        <div className="row">
          <div className="intro col-md-8 text-white">
            <h1 className="intro-title text-white display-1">Hi, I'm Asil.</h1>
            <figure className="intro-text">
              <blockquote className="blockquote">
                <p>
                  I am a senior high school student and a web developer located
                  in Turkey. Nice to meet you!
                </p>
              </blockquote>
            </figure>
          </div>
          <div className="col-md-4">
            <div className="image">
              <div className="img-border">
                <img
                  src="./assets/images/asil_4_5.jpg"
                  className="img-fluid rounded"
                  alt="Asil Efe Akyol"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="scroll scroll-first"></div>
            <div className="scroll scroll-second"></div>
          </div>
        </div>
      </div>
      <div className="skew shadow-lg"></div>
    </div>
  );
};

export default Card;
