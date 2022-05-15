import React, { useState } from "react";

import Skill from "./Skill";

import "../styles/Skills.css";

const Skills = () => {
  const [skills] = useState([
    {
      id: 1,
      title: "JavaScript",
      icon: "",
    },
    {
      id: 2,
      title: "TypeScript",
      icon: "",
    },
    {
      id: 3,
      title: "Node.js",
      icon: "",
    },
    {
      id: 4,
      title: "React.js",
      icon: "",
    },
    {
      id: 5,
      title: "React Native",
      icon: "",
    },
    {
      id: 6,
      title: "Vue.js",
      icon: "",
    },
    {
      id: 7,
      title: "jQuery",
      icon: "",
    },
    {
      id: 8,
      title: "Go",
      icon: "",
    },
    {
      id: 9,
      title: "CSS",
      icon: "",
    },
    {
      id: 10,
      title: "Bootstrap",
      icon: "",
    },
    {
      id: 11,
      title: "SEO",
      icon: "",
    },
    {
      id: 12,
      title: "Git",
      icon: "",
    },
    {
      id: 13,
      title: "Python",
      icon: "",
    },
    {
      id: 14,
      title: "Adobe Photoshop",
      icon: "",
    },
    {
      id: 15,
      title: "Adobe InDesign",
      icon: "",
    },
    {
      id: 16,
      title: "Sony Vegas",
      icon: "",
    },
  ]);

  return (
    <>
      <div className="anchor" id="skills"></div>
      <div className="skills container text-white">
        <h1 className="text-light">Skills</h1>
        <hr className="hr" />
        <div className="row row-cols-2 gy-4 gx-2">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
