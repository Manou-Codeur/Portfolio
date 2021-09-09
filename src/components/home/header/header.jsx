import { motion } from "framer-motion";

import "./header.scss";

const Header = () => {
  return (
    <motion.div
      id="header"
      className="section header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1>
        Hi, I'm a <span className="black">Developer</span>
      </h1>
      <p>
        I'm Salim from Algeria!👋 I'm a 20 years old guy who is obsessed by
        code. I take code as a way for giving life to my ideas and I'm about to
        start writing blogs about web developement.
      </p>
      <div className="header__btns">
        <button className="header__connect">
          <a href="/home#contact">Let's Connect</a>
        </button>
        <button className="header__resume">
          <a
            href="https://drive.google.com/file/d/1kwsJueBypK0iPPg7hwA_aZhOham8psVz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
