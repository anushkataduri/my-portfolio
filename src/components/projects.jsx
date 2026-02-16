
import { motion } from "framer-motion";
// import "/projects.css"
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
// import { FaGithub, FaYoutube } from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      title: "Health-Mate",
      desc: "A Health Monitoring System.",
      image: project1,
      github: "#",
    },
    {
      title: "Master Job Portal",
      desc: "A job portal web application..",
      image: project2,
      youtube: "#",
    },
    {
      title: "Agri Organics",
      desc: "An e-commerce platform application",
      image: project3,
      github: "#",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            {/* <div className="icons">
              {project.github && (
                <a href={project.github}>
                  <FaGithub />
                </a>
              )}
              {project.youtube && (
                <a href={project.youtube}>
                  <FaYoutube />
                </a>
              )}
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Projects() {
//     const navigate = useNavigate();
//     const projects = [
//         {
//             id: 1,
//             title: "Health-Mate",
//             description: "A Health Monitoring System .",
//         },
//         {
//             id: 2,  
//             title: "Master Job Portal",
//             description: "A job portal web application.",
//         },  
//         {
//             id: 3,
//             title: "Agri Organics",
//             description: "An e-commerce platform application.",
//         },
//     ];
//   return (
//     <section id="projects" className="section">
//       <h2>Projects</h2>

//       <div className="projects-container">
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             className="glass"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             onClick={() => navigate(`/project/${project.id}`)}
//             style={{ cursor:"pointer"}}
//           >
//             <h3>{project.title}</h3>
//             <p> {project.description} </p>
//           </motion.div>
//         ))}
     
//       </div>
//     </section>
//   );
// }


// // import React from 'react';

// // export default function Projects() {
// //     return (
// //         <section id="projects" className="section">
// //             <h2>Projects:</h2>
// //              <div className="project">
// //                 <h2><u>HealthMate</u></h2>
// //                 <p> Health Monitoring System uses image processing, and fuzzy logic for nutritional assessment and personalized dietary 
// // recommendations. It employs CNNs for real-time food analysis, identifies key nutrients, and uses algorithms like K-means clustering and 
// // decision trees to provide tailored advice, promoting healthier choices and improved health outcomes.    </p>
// //             </div>
// //             <div className="project">
// //                 <h2><u>Job Portal Web Application</u></h2>
// //                 <p> Developed a job portal web application using Angular and TypeScript, implementing features such as job management, 
// // search and filtering, form validations, and role-based access. Building responsive UI components with HTML, CSS, and Bootstrap, integrating 
// // RESTful APIs, and collaborating with backend teams to optimize performance, debug issues, and maintain code using Git. </p>
// // </div> 
// //         </section>
// //     );
// // }