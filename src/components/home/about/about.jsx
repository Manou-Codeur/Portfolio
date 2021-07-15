import "./about.scss";

import { useRef } from "react";

const About = () => {
  const myRef = useRef(null);

  return (
    <div id="about" className="section about" ref={myRef}>
      <div
        className="about__img-containner"
        data-aos="zoom-in"
        data-aos-delay="50"
      >
        <img src="./imgs/me.png" alt="Salim Ayache" />
      </div>
      <h1>ABOUT ME</h1>
      <p data-aos="fade-up">
        My name is Salim, i study applied statistics at ENSSEA in Algeria, and
        i'm a self taught front end web developer.
      </p>
      <p data-aos="fade-up">
        I taught myself programming since 2019 through online courses, books,
        blogs and of course by putting that knowledge into apply and building
        real world web applications.
      </p>
      <p data-aos="fade-up">
        The main area of my expertise is front end developement using HTML,
        CSS(SASS), JavaScript, React, Redux, Git, GraphQl, and actually i'm
        learning testing. I use firebase for the back end stuff before i start
        my back end career, and become at the end full stack developer. <br /> I
        do the design of my websites even though i am not a designer.
      </p>
      <div className="about__images_containner">
        <img
          src="./imgs/img01.jpg"
          alt="Salim Ayache"
          data-aos="fade-right"
          style={{ marginTop: "-3%" }}
        />
        <img src="./imgs/img02.jpg" alt="Salim Ayache" data-aos="fade-up" />
        <img
          src="./imgs/img03.jpg"
          alt="Salim Ayache"
          data-aos="fade-left"
          style={{ marginTop: "3%" }}
        />
      </div>
      <p data-aos="fade-up">
        In my spare time, i read books about self development, i learn
        photography and i watch scientific documentary. I contribute to AIESEC
        projects (AIESEC is an international youth-run organization that
        provides young people with leadership development, cross-cultural
        internships, and global volunteer exchange experiences), thing that
        helps me to develop my soft skills, get to know more people and grow my
        network.
      </p>
    </div>
  );
};

export default About;
