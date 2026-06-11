import "./Certifications.css";
import {
  FaCertificate,
  FaGoogle,
  FaPython,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      icon: <FaGoogle />,
      title: "Google AI/ML Virtual Internship",
      issuer: "Google • 2025",
      link: "/my_portfolio/certificates/google-aiml.pdf",
    },
    {
      icon: <FaLaptopCode />,
      title: "MongoDB Node.js Developer Path",
      issuer: "MongoDB University • 2025",
      link: "/my_portfolio/certificates/mongodb-nodejs.pdf",
    },
    {
      icon: <FaPython />,
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy • 2026",
      link: "/my_portfolio/certificates/python-essentials.pdf",
    },
    {
      icon: <FaCertificate />,
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy • 2026",
      link: "/my_portfolio/certificates/modern-ai.pdf",
    },
    {
      icon: <FaCertificate />,
      title: "Programming in Java",
      issuer: "NPTEL • Jul-Sep 2024",
      link: "/my_portfolio/certificates/programming-java.pdf",
    },
    {
      icon: <FaLaptopCode />,
      title: "Diamond Certified Smart Coder",
      issuer: "Global Rank 2566 / 51250 • 2025",
      link: "/my_portfolio/certificates/smart-coder.pdf",
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
          >
            <div className="cert-icon">{cert.icon}</div>

            <h3>{cert.title}</h3>

            <span>{cert.issuer}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;