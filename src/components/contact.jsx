// export default function Contact() {
//     return (
//         <section id="contact" className="contact">
//             <h2>Contact Me:</h2>
//             <p>Email: Anushka.tadurii@gmail.com</p>
//             <p>Phone: +91 1234567890</p>
//             <p>LinkedIn: <a href="https://www.linkedin.com/in/anushka-taduri-9681102b5/">linkedin.com/in/anushka-taduri</a></p>
//         </section>
//     );
// }
// import "./About.css";
import profile from "../assets/profile.jpg"; // put your photo here

export default function About() {
  return (
    <section className="about-container">

      <div className="about-left">
        <div className="image-ring">
          <img src={profile} alt="profile" />
        </div>
      </div>

      <div className="about-right">
        <h2>Hello! I’m <span>Anushka Taduri</span>, a dedicated Full Stack Developer from India.</h2>

        <p>
          Driven by innovation and a passion for technology, I enjoy transforming ideas into impactful, user-centered digital solutions. With experience in 
creative, problem-solving projects, I blend logic and design to build meaningful applications. Eager to apply my knowledge in real-world, datadriven 
roles, I am committed to continuous learning and contributing to projects that create meaningful experiences and lasting impact.
        </p>

        <div className="info-grid">
          <div>
            <p><b>First Name:</b> Anushka</p>
            <p><b>Date of Birth:</b> January 19, 2004</p>
            <p><b>Languages:</b> English, Telugu, Hindi</p>
            <p><b>Email:</b> anushka.tadurii@gmail.com</p>
          </div>

          <div>
            <p><b>Last Name:</b> Taduri</p>
            <p><b>Nationality:</b> Indian</p>
            <p><b>Phone:</b> +91 123456780</p>
          </div>
        </div>

        <h3 className="skills-title">Skills</h3>

        <div className="skills-grid">
          <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <ul>
            <li>Bootstrap</li>
            <li>React.js</li>
            <li>Django</li>
            <li>MySQL</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
