import { useState } from "react";

import Header from "./header/header";
import About from "./about/about";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";
import Project from "./project/project";

import "./home.scss";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="home" className="home">
      {selectedProject && (
        <Project details={selectedProject} isOpen={setSelectedProject} />
      )}
      <Header />
      <About />
      <Portfolio setSelectedProject={setSelectedProject} />
      <Contact />
    </div>
  );
};

export default Home;
