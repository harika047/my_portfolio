import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        I'm always open to discussing new opportunities,
        collaborations, and innovative projects.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <FaEnvelope />
          <h3>Email</h3>
          <p>
            harikasaidarshini1812
            @gmail.com
          </p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt />
          <h3>Phone</h3>
          <p>
            +91 7330606848
          </p>
        </div>

        <div className="contact-card">
          <FaGithub />
          <h3>GitHub</h3>

          <a
            href="https://github.com/harika047"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin />
          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/harika-sai-darshini-gadireddy"
            target="_blank"
            rel="noreferrer"
          >
            Connect
          </a>
        </div>

      </div>

      <div className="contact-cta">

        <a
          href="mailto:harikasaidarshini1812@gmail.com"
          className="contact-btn"
        >
          Send Email
        </a>

      </div>

    </section>
  );
}

export default Contact;