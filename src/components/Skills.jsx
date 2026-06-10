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

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-container">

        <div className="skill-category">
          <h3>Programming</h3>

          <div className="skill">
            <FaPython />
            <span>Python</span>
            <div className="progress">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <FaJava />
            <span>Java</span>
            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill">
            <SiJavascript />
            <span>JavaScript</span>
            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>AI / ML</h3>

          <div className="skill">
            <SiTensorflow />
            <span>Machine Learning</span>
            <div className="progress">
              <div style={{ width: "88%" }}></div>
            </div>
          </div>

          <div className="skill">
            <FaPython />
            <span>Data Analysis</span>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <SiTensorflow />
            <span>Deep Learning</span>
            <div className="progress">
              <div style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Web Development</h3>

          <div className="skill">
            <FaReact />
            <span>React</span>
            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill">
            <FaHtml5 />
            <span>HTML</span>
            <div className="progress">
              <div style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill">
            <FaCss3Alt />
            <span>CSS</span>
            <div className="progress">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <SiFlask />
            <span>Flask</span>
            <div className="progress">
              <div style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Database</h3>

          <div className="skill">
            <SiMysql />
            <span>MySQL</span>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <FaDatabase />
            <span>SQL</span>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;