import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Education</h2>

      <div className="glass">
        <h3>TKR College of Engineering & Technology</h3>
        <p>B.Tech in CSE (AI & ML)</p>
        <p>CGPA: 7.95</p>
      </div>
      <div className="glass">
        <h3>Narayana junior College</h3>
        <p>Intermediate (MPC)</p>
        <p>Percentage: 88%</p>
      </div>
      <div className="glass"> 
        <h3>Narayana E-Techno School</h3>
        <p>SSC</p>
        <p>Percentage: 8.9 CGPA</p>
      </div>
    </motion.section>
    
  );
}
