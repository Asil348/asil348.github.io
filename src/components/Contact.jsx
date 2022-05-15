import React from "react";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="anchor" id="contact"></div>
      <div className="contact container text-white">
        <h1 className="text-light">Contact</h1>
        <hr className="hr" />
        <div className="contact-form">
          <div className="card text-white bg-transparent mb-3">
            <div className="card-body">
              {/* <h4 className="card-title">Dark card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
              <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScl-JhfNghLMPtAWGOqequESkh2jzLX-0idUiv7JA9wclTpZw/formResponse" method="POST">
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    What can I call you?
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    id="nameInput"
                    placeholder="Name"
                    required
                    name="entry.2005620554"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="form-control bg-dark text-light"
                    id="emailInput"
                    placeholder="E-Mail"
                    required
                    name="entry.1045781291"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="textInput" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control bg-dark text-light"
                    id="textInput"
                    placeholder="What can I do for you?"
                    required
                    name="entry.839337160"
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="divider">
          <span></span>
          <span>OR</span>
          <span></span>
        </div>
        <h1 className="text-light text-center mb-3">Find me on:</h1>
        <div className="center-m">
          <div id="social-test">
            <ul className="social">
              <a
                href="http://linkedin.com/in/asilefeakyol"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <li>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </li>
              </a>
              <a
                href="http://github.com/Asil348"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <li>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </li>
              </a>
              <a
                href="http://instagram.com/asil.ea"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <li>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </li>
              </a>
              <a
                href="http://twitter.com/asilefeakyol"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <li>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </li>
              </a>
              <a
                href="mailto:asilefeakyol@gmail.com"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                <li>
                  <i className="fa fa-at" aria-hidden="true"></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
