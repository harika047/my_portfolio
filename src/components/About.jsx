import "./About.css";
import { FaGraduationCap, FaBrain, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-text">

          <h3>Who Am I?</h3>

          <p>
            I'm <span>Harika Sai Darshini</span>, an aspiring
            AI/ML Engineer and Full Stack Developer passionate
            about building intelligent, scalable, and impactful
            digital solutions.
          </p>

          <p>
            My interests lie in Machine Learning,
            Artificial Intelligence, Data Analytics,
            and Modern Web Development. I enjoy solving
            real-world problems through technology and
            continuously learning emerging tools and frameworks.
          </p>

        </div>

        <div className="timeline">

          <div className="timeline-card">
            <FaGraduationCap />
            <div>
              <h4>Education</h4>
              <p>
                B.Tech in Computer Science Engineering
                (Artificial Intelligence & Machine Learning)
              </p>
            </div>
          </div>

          <div className="timeline-card">
            <FaBrain />
            <div>
              <h4>AI & Machine Learning</h4>
              <p>
                Developing intelligent applications using
                Python, Machine Learning, Deep Learning,
                and Data Analysis.
              </p>
            </div>
          </div>

          <div className="timeline-card">
            <FaLaptopCode />
            <div>
              <h4>Web Development</h4>
              <p>
                Building responsive and user-friendly web
                applications using React, JavaScript,
                HTML, CSS, and Flask.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;