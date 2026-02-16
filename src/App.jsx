import { Routes , Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Education from './components/education';
import Projects from './components/projects';
import Contact from './components/contact';
import Experience from './components/experience';

function Home(){
  return (
    <>
      <Hero />
      <Education />
      <Projects />
      <Experience/>
      <Contact />
    </>
  );
}
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
