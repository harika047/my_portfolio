import "./Achievements.css";
import {CountUp} from "react-countup";
import {
  FaTrophy,
  FaCode,
  FaLightbulb
} from "react-icons/fa";

function Achievements() {
  return (
    <section id="achievements" className="achievements">

      <h2 className="section-title">Achievements</h2>

      <div className="stats-container">

        <div className="stat-card">
          <h3>
            <CountUp end={3} duration={3} />+
          </h3>
          <p>Hackathons</p>
        </div>

        <div className="stat-card">
          <h3>
            <CountUp end={10} duration={3} />+
          </h3>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h3>
            <CountUp end={5} duration={3} />+
          </h3>
          <p>Certifications</p>
        </div>

      </div>

      <div className="achievement-grid">

        <div className="achievement-card">
          <div className="icon-wrapper">
            <FaTrophy />
          </div>

          <h3>PVPSIT Full Stack Hackathon</h3>

          <p>
            Secured a position among the Top 5 teams by developing
            an innovative full-stack solution.
          </p>
        </div>

        <div className="achievement-card">
          <div className="icon-wrapper">
            <FaCode />
          </div>

          <h3>AI Chatbot Development Hackathon</h3>

          <p>
            Designed and developed an AI-powered chatbot
            to solve real-world communication challenges.
          </p>
        </div>

        <div className="achievement-card">
          <div className="icon-wrapper">
            <FaLightbulb />
          </div>

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