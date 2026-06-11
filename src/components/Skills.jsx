import "./Skills.css";
import {
  FaPython,
  FaReact,
  FaJava,
  FaDatabase,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiJavascript,
  SiFlask,
  SiTensorflow,
  SiMysql
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { icon: <FaPython />, name: "Python", level: 90 },
      { icon: <FaJava />, name: "Java", level: 80 },
      { icon: <SiJavascript />, name: "JavaScript", level: 80 }
    ]
  },
  {
    title: "AI / ML",
    skills: [
      { icon: <SiTensorflow />, name: "Machine Learning", level: 88 },
      { icon: <FaPython />, name: "Data Analysis", level: 85 },
      { icon: <SiTensorflow />, name: "Deep Learning", level: 75 }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { icon: <FaReact />, name: "React", level: 80 },
      { icon: <FaHtml5 />, name: "HTML", level: 95 },
      { icon: <FaCss3Alt />, name: "CSS", level: 90 },
      { icon: <SiFlask />, name: "Flask", level: 75 }
    ]
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMysql />, name: "MySQL", level: 85 },
      { icon: <FaDatabase />, name: "SQL", level: 85 }
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div
            className="skill-category"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{category.title}</h3>

            {category.skills.map((skill, i) => (
              <div className="skill" key={i}>
                <div className="skill-info">
                  <div className="skill-name">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>

                  <span className="skill-percent">
                    {skill.level}%
                  </span>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${skill.level}%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;