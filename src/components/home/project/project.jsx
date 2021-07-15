import ProjectStory from "./projectStory";
import { useEffect } from "react";

import "./project.scss";

const Project = ({
  details: { backColor, color, projectName, projectType, url },
  isOpen,
}) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => (document.body.style.overflowY = "initial");
  }, []);

  return (
    <div
      className="project"
      style={{ backgroundColor: backColor, color: color }}
    >
      <span onClick={() => isOpen(false)} style={{ borderColor: color }}>
        Close
      </span>
      <h1>{projectName}</h1>
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

      <ProjectStory projectName={projectName} />
    </div>
  );
};

export default Project;
