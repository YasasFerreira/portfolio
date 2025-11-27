import React from "react";
import "./Education.css";

import experience from "../../assets/experience.js";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-title">
        <h1>Education / Experience</h1>
        
      </div>

      <div className="education-container">
        {experience.map((item, index) => (
          <div key={index} className="education-card">
            <div className="education-year">{item.year}</div>
            <div className="education-info">
              <h2>{item.title}</h2>
              <h3>{item.institute}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
