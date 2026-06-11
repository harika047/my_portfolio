import "./Skills.css";
import { motion } from "framer-motion";

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

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-container">

        {/* Programming */}
        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Programming</h3>

          <div className="skill">
            <FaPython />
            <span>Python</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="skill">
            <FaJava />
            <span>Java</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="skill">
            <SiJavascript />
            <span>JavaScript</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>

        {/* AI/ML */}
        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>AI / ML</h3>

          <div className="skill">
            <SiTensorflow />
            <span>Machine Learning</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="skill">
            <FaPython />
            <span>Data Analysis</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="skill">
            <SiTensorflow />
            <span>Deep Learning</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>

        {/* Web Development */}
        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3>Web Development</h3>

          <div className="skill">
            <FaReact />
            <span>React</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="skill">
            <FaHtml5 />
            <span>HTML</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="skill">
            <FaCss3Alt />
            <span>CSS</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="skill">
            <SiFlask />
            <span>Flask</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>

        {/* Database */}
        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h3>Database</h3>

          <div className="skill">
            <SiMysql />
            <span>MySQL</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="skill">
            <FaDatabase />
            <span>SQL</span>
            <div className="progress">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Skills;