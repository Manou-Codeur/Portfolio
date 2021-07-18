import { useEffect } from "react";
import { motion } from "framer-motion";

import ProjectStory from "./projectStory";

import "./project.scss";

const Project = ({
  details: { backColor, color, projectName, projectType, url },
  isOpen,
}) => {
  useEffect(() => {
    document.body.classList.add("hide-scroll");

    return () => document.body.classList.remove("hide-scroll");
  }, []);

  return (
    <motion.div
      className="project"
      initial={{ height: "1vh" }}
      animate={{ height: "100vh" }}
      transition={{ duration: 1 }}
      exit={{ height: "1vh" }}
    >
      <div
        className="project__top-part"
        style={{ backgroundColor: backColor, color: color }}
      >
        <span onClick={() => isOpen(false)} style={{ borderColor: color }}>
          Close
        </span>
        <h1>{projectName.toUpperCase()}</h1>
        <h2>{projectType}</h2>
        <img
          src={`./imgs/${projectType}.jpg`}
          alt="Project preview"
          className="project__image"
        />
        <button style={{ border: `3px solid ${color}`, color: color }}>
          <a href={url} target="_blank" rel="noreferrer">
            LAUNCH SITE
          </a>
        </button>
      </div>
      <ProjectStory projectName={projectName} />
    </motion.div>
  );
};

export default Project;
