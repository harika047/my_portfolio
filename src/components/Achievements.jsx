import "./Achievements.css";
import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";
import { useState } from "react";
import {
  FaTrophy,
  FaCode,
  FaLightbulb
} from "react-icons/fa";

function Achievements() {
   const [startCount, setStartCount] = useState(false);
  return (
    <section id="achievements" className="achievements">

      <h2>Achievements</h2>

     <div className="stats-container">
<motion.div
  className="stats-container"
  onViewportEnter={() => setStartCount(true)}
  viewport={{ once: true }}
>

  <motion.div
    className="stat-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h3>
      <AnimatedNumber
        value={3}
        startAnimation={startCount}
      />
    </h3>
    <p>Hackathons</p>
  </motion.div>

  <motion.div
    className="stat-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h3>
      <AnimatedNumber
        value={10}
        startAnimation={startCount}
      />
    </h3>
    <p>Projects</p>
  </motion.div>

  <motion.div
    className="stat-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h3>
      <AnimatedNumber
        value={6}
        startAnimation={startCount}
      />
    </h3>
    <p>Certifications</p>
  </motion.div>

</motion.div>
  

      </div>

  <div className="achievement-grid">

  <motion.div
    className="achievement-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <FaTrophy className="achievement-icon" />
    <h3>MERNVERSE 2026 Hackathon</h3>
    <p>
      Secured <strong>2nd Prize</strong> in the 24-hour MERNVERSE Hackathon by
      developing PlacementPilot AI, an AI-powered placement preparation platform.
    </p>
  </motion.div>

  <motion.div
    className="achievement-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <FaCode className="achievement-icon" />
    <h3>PVPSIT Full Stack Hackathon</h3>
    <p>
      Secured a <strong>Top 5 position among 34 teams</strong> by developing an
      innovative full-stack solution.
    </p>
  </motion.div>

  <motion.div
    className="achievement-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
  >
    <FaCode className="achievement-icon" />
    <h3>AI Chatbot Development Hackathon</h3>
    <p>
      Designed and developed an AI-powered chatbot to solve real-world
      communication challenges.
    </p>
  </motion.div>

  <motion.div
    className="achievement-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.1 }}
  >
    <FaLightbulb className="achievement-icon" />
    <h3>Eco Track Ideathon</h3>
    <p>
      Participated in an innovation challenge focused on sustainable and
      eco-friendly technology solutions.
    </p>
  </motion.div>

</div>
    </section>
  );
}

export default Achievements;