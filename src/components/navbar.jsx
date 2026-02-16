import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="navbar"
    >
      <div className="logo">Portfolio</div>
      <div className="nav-links">
          <a href="/">Home</a>
        <a href="/education">Education</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </motion.nav>
  );
}
 

