import "./Hero.css";
import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaReact,
  FaPython,
  FaDatabase
} from "react-icons/fa";

import { SiTensorflow } from "react-icons/si";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-content">

        <motion.span
          className="tag"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI/ML Engineer • Full Stack Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <br />
          <span>Harika Sai Darshini</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Passionate AI/ML Engineer and Full Stack Developer
          dedicated to building intelligent applications,
          machine learning solutions, and scalable web experiences.
        </motion.p>

        <div className="hero-buttons">

          <a href={resume} download>
            <button className="primary-btn">
              <FaDownload />
              Resume
            </button>
          </a>

          <a href="#projects">
            <button className="secondary-btn">
              View Projects
            </button>
          </a>

        </div>

        <div className="hero-socials">

          <a href="https://github.com/harika047" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/harika-sai-darshini-gadireddy" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="hero-image-container">

        <div className="floating-icon icon1">
          <FaReact />
        </div>

        <div className="floating-icon icon2">
          <FaPython />
        </div>

        <div className="floating-icon icon3">
          <SiTensorflow />
        </div>

        <div className="floating-icon icon4">
          <FaDatabase />
        </div>

        <img
          src={profile}
          alt="Darshini"
          className="hero-image"
        />

      </div>

    </section>
  );
}

export default Hero;