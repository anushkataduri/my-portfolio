import { motion } from "framer-motion";
import me from "../assets/me.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
        >
          Hi, I'm <span>Anushka Taduri</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 4 }}
          className="typing"
        >
<Typewriter
    words={[
      "AI & ML Developer",
      "Full Stack Engineer",
      "React Developer",
      "Problem Solver"
    ]}
    loop={0}
    cursor
  />        </motion.h3>




        <p>
          Passionate about building intelligent systems and meaningful digital experiences.
        </p>

        {/* <button className="hero-btn">View My Work</button> */}
      </div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hero-image"
      >
        <img src={me} alt="me" />
      </motion.div>

    </section>
  );
}
