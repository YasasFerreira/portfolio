import React from "react";
import "./Projects.css";
import work_list from "../../assets/myworks.js";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="projects-container">
        {work_list.map((work, index) => (
          <div key={index} className="project-item">
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <img src={work.image} alt={work.name} />
              <div className="overlay">
                <p>{work.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <a href="https://github.com/YasasFerreira" target="_blank" rel="noreferrer">
        <div className="projects-showmore">
          <p>Show More</p>
        </div>
      </a>
    </section>
  );
};

export default Projects;
