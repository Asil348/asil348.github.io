import React from "react";
import "../styles/Works.css";

const Work = ({ work }) => {
  return (
    <div className="w-100 mb-4">
      <div className="row work p-3">
        <div className="col-md">
          <h3 className="text-light text-center mb-0">{work.title}</h3>
        </div>
        <div className="col-md my-3 p-0">
          <p className="text-light mb-0">{work.description}</p>
        </div>
        <div className="col-md p-0">
          <p className="mb-0 initialism text-center">
            {work.technologies.map((technology, i) => {
              if (i + 1 === work.technologies.length) {
                // Last one.
                return <span key={i}>{technology}</span>;
              } else {
                // Not last one.
                return <span key={i}>{technology}, </span>;
              }
            })}
          </p>
        </div>
        <div className="col-md text-center p-0 my-3">
          <a href={work.link}><button type="button" className="btn btn-lg btn-primary">Go to project</button></a>
        </div>
        {/* <div>{skill.icon}</div> */}
      </div>
    </div>
  );
};

export default Work;
