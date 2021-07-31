import React from "react";
import '../styles/Card.css'

const Card = () => {
  return (

      <div className="card-container container">
        <div className="row">
          <div className="intro col-md-8 text-white">
            <h1 className="intro-title text-white">Hi, I'm Asil.</h1>
            <p className="intro-text">
              I am a senior high school student and a web developer located in Turkey. Nice to meet you!
            </p>
          </div>
          <div className="image col-md-4">
            <div className="img-border">
              <img src="./assets/images/asil_4_5.jpg" class="img-fluid rounded" alt="Asil Efe Akyol" />
            </div>
          </div>
        </div>
        {/* <div
          className="card text-white bg-dark mb-3 shadow-lg"
          style={{ maxWidth: 540 + "px" }}
        >
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">Hi, I'm Asil.</h1>
                <p className="card-text">
                  I am a senior high school student and a web developer located in Turkey. Nice to meet you!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="./assets/images/asil_4_5.jpg"
                className="img-fluid rounded-start"
                alt="Asil Efe Akyol"
              />
            </div>
          </div>
        </div> */}
      </div>
  );
};

export default Card;
