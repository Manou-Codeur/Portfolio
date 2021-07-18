import Preview from "./preview/preview";

import "./portfolio.scss";

const Portfolio = ({ setSelectedProject }) => {
  return (
    <div id="portfolio" className="section portfolio">
      <h3 data-aos="fade-up" data-aos-delay="300">
        SIDE PROJECTS
      </h3>
      <h1 data-aos="fade-up" data-aos-delay="300">
        2 YEARS OF
        <br /> <span className="black">SELF TAUGHT.</span>
      </h1>
      <p className="portfolio__quote" data-aos="fade-up" data-aos-delay="300">
        As a creative person, I always want to be doing something that fulfils
        my creativity. You are not sure if you want to collaborate with me?
        <span className="black"> Check out my work!</span>
      </p>
      <div className="portfolio__previews-containner">
        <Preview
          details={{
            projectName: "Fash",
            projectType: "E-commerce",
            animate: "right",
          }}
          setSelectedProject={setSelectedProject}
        />
        <Preview
          details={{
            projectName: "Mysplash",
            projectType: "Stock Images",
            animate: "left",
          }}
          setSelectedProject={setSelectedProject}
        />
        <Preview
          details={{
            projectName: "GitHub_S",
            projectType: "Search Engine",
            animate: "right",
          }}
          setSelectedProject={setSelectedProject}
        />
      </div>
    </div>
  );
};

export default Portfolio;
