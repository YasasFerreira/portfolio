    import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML & CSS", level: "70%" },
  { name: "JavaScript", level: "60%" },
  { name: "React", level: "65%" },
  { name: "React Native", level: "60%" },
  { name: "Java", level: "70%" },
  { name: "Python", level: "55%" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
