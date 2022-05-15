import React, { useState } from "react";

import Work from "./Work";

import "../styles/Works.css";

const Works = () => {
  const [works] = useState([
    {
      id: 1,
      title: "VisporApp",
      description:
        "Working as a full-stack developer to create the revolutionary athlete training and content platform, VisporApp",
      link: "https://vispor.club/",
      technologies: ["React.js", "React Native", "Next.js", "CSS"],
    },
    {
      id: 2,
      title: "Spotify Your Times",
      description:
        "A website that analyzes your tracks depending on which year they belong to and creates playlists by the years and genre",
      link: "https://github.com/Asil348/spotify-your-times",
      technologies: ["Javascript", "Vue", "RESTful APIs"],
    },
    {
      id: 3,
      title: "Counter",
      description: "Count stuff",
      link: "https://github.com/Asil348/counter",
      technologies: ["Javascript", "Vue"],
    },
    {
      id: 4,
      title: "Spotify Collaborative Playlist Analyzer",
      description: "Analyze your collaborative Spotify playlists.",
      link: "https://github.com/Asil348/spotify-collaborative-playlist-analyzer",
      technologies: ["Javascript", "EJS", "Express", "RESTful APIs"],
    },
    {
      id: 5,
      title: "TQBOT",
      description:
        "A Discord bot with music, moderation and entertainment commands",
      link: "https://github.com/Asil348/tqbot",
      technologies: ["Javascript", "Discord.js"],
    },
    {
      id: 6,
      title: "Image Consumer Bot",
      description:
        "Assisted creating a Discord bot for filtering sent images to keep communities safe.",
      link: "https://github.com/jamesrchen/ImageConsumer",
      technologies: ["Javascript", "Discord.js"],
    },
    {
      id: 7,
      title: "Euphobia Studios",
      description: "Created, designed and maintained the Euphobia Store.",
      link: "https://euphobiastudios.com/",
      technologies: ["Wordpress, E-commerce, CSS, SEO"],
    },
  ]);

  return (
    <div className="works container text-white">
      <h1 className="text-light">Works</h1>
      <hr className="hr" />
      {works.map((work) => (
        <Work key={work.id} work={work} />
      ))}
    </div>
  );
};

export default Works;
