import "./Certifications.css";
import {
  FaCertificate,
  FaGoogle,
} from "react-icons/fa";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>

      <div className="certification-grid">

        <div className="cert-card">
          <div className="cert-icon">
            <FaGoogle />
          </div>

          <h3>Google AI/ML Virtual Internship</h3>

          <p>
            Successfully completed hands-on training in
            Artificial Intelligence and Machine Learning,
            gaining practical experience in model development
            and deployment.
          </p>

          <span>Google</span>
        </div>

        <div className="cert-card">
          <div className="cert-icon">
            <FaJava />
          </div>

          <h3>NPTEL Programming in Java</h3>

          <p>
            Developed a strong foundation in object-oriented
            programming concepts, Java development,
            and software engineering principles.
          </p>

          <span>NPTEL</span>
        </div>

        <div className="cert-card">
          <div className="cert-icon">
            <FaCertificate />
          </div>

          <h3>NPTEL Design & Analysis of Algorithms</h3>

          <p>
            Learned algorithm design techniques,
            complexity analysis, and efficient problem-solving
            strategies.
          </p>

          <span>NPTEL</span>
        </div>

      </div>
    </section>
  );
}

export default Certifications;