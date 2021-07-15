import { getStylesAndUrl } from "./../../../../helperFunctions";
import "./preview.scss";

const Preview = ({
  details: { projectName, projectType, animate },
  setSelectedProject,
}) => {
  const handleOnClick = () => {
    const { backColor, color, url } = getStylesAndUrl(projectName);

    const obj = {
      projectName,
      projectType,
      backColor,
      color,
      url,
    };

    setSelectedProject(obj);
  };

  return (
    <div
      className="outer"
      data-aos={`fade-${animate}`}
      data-aos-delay="300"
      onClick={handleOnClick}
    >
      <div className="preview">
        <div className="preview__texts">
          <h2>
            {projectType} <br /> Application
          </h2>
          <p>{projectName}</p>
        </div>
        <img
          src={`./imgs/${projectType}.jpg`}
          alt="Project preview"
          className="preview__image"
        />
      </div>
    </div>
  );
};

export default Preview;
