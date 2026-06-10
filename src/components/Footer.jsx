import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>Harika Sai Darshini</h3>

        <p>
          AI/ML Engineer • Full Stack Developer • Problem Solver
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com/harika047"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harika-sai-darshini-gadireddy"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:harikasaidarshini1812@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Harika Sai Darshini. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;