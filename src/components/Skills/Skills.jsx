import React from "react";
import "./Skills.css";


const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
         
      </div>
      <div className="skills-container">
        <div className="skill-item">
          <p>HTML & CSS</p>
          <hr style={{ width: "50%" }} />
        </div>
        <div className="skill-item">
          <p>React</p>
          <hr style={{ width: "35%" }} />
        </div>
        <div className="skill-item">
          <p>React Native</p>
          <hr style={{ width: "40%" }} />
        </div>
        <div className="skill-item">
          <p>Java</p>
          <hr style={{ width: "50%" }} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
