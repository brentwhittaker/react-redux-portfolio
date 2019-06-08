import React from "react";
import PROJECTS from "../data/project.js";

const Project = props => {
  const { title, image, link, description } = props.project;
  return (
    <div style={{ display: "inline-block", width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>Cool Tech</h2>
    <div>
      {PROJECTS.map(PROJECT => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
);

export default Projects;
