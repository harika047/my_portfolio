import "./Achievements.css";
import CountUp from "react-countup";
import {
  FaTrophy,
  FaCode,
  FaLightbulb
} from "react-icons/fa";

function Achievements() {
  return (
    <section id="achievements" className="achievements">

      <h2>Achievements</h2>

      <div className="stats-container">

        <div className="stat-card">
          <h3>3+</h3>
          <p>Hackathons</p>
        </div>

        <div className="stat-card">
          <h3>
           10+
          </h3>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h3>
           5+
          </h3>
          <p>Certifications</p>
        </div>

      </div>

      <div className="achievement-grid">

        <div className="achievement-card">
          <FaTrophy />
          <h3>PVPSIT Full Stack Hackathon</h3>
          <p>
            Secured a position among the Top 5 teams by
            developing an innovative full-stack solution.
          </p>
        </div>

        <div className="achievement-card">
          <FaCode />
          <h3>AI Chatbot Development Hackathon</h3>
          <p>
            Designed and developed an AI-powered chatbot
            to solve real-world communication challenges.
          </p>
        </div>

        <div className="achievement-card">
          <FaLightbulb />
          <h3>Eco Track Ideathon</h3>
          <p>
            Participated in an innovation challenge focused
            on sustainable and eco-friendly technology solutions.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Achievements;