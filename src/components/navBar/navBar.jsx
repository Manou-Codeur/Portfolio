import { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

import MobileNavBar from "./mobileNavBar/mobileNavBar";

import "./navBar.scss";

const NavBar = () => {
  const mobileNavBarRef = useRef();

  const removeAllActiveClasses = () => {
    const navLi = document.querySelectorAll(".link");
    navLi.forEach(el => {
      el.classList.remove("active");
    });
  };

  const addActiveClass = id => {
    const selector = "." + id + "a";
    if (document.querySelector(selector))
      document.querySelector(selector).classList.add("active");
  };

  const listener = () => {
    const sections = document.querySelectorAll(".section");

    // i did minus window.innerHeight / 2 so the CONTACT link could also be highlighted
    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - window.innerHeight / 2) {
        const currentClassName = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentClassName);
      }
    });
  };

  //Change active class to nav links on scroll
  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  // code to hide the nav bar on scroll down and display on scroll up
  useEffect(() => {
    let scrollPos = window.pageYOffset;

    window.addEventListener("scroll", () => {
      //apply this logic only if the mobile nav bar is hidden
      if (mobileNavBarRef.current) return;

      let currentScrollPos = window.pageYOffset;
      if (scrollPos > currentScrollPos) {
        document.querySelector(".navBar").className = "navBar navBar--visible";
      } else {
        document.querySelector(".navBar").className = "navBar navBar--hidden";
      }
      scrollPos = currentScrollPos;
    });
  }, []);

  return (
    <motion.div
      className="navBar navBar--visible"
      initial={{ transform: "translateY(-100%)" }}
      animate={{ transform: "translateY(0%)" }}
      transition={{ duration: 1 }}
    >
      <div className="navBar__left-part">
        <img src="/logo_512.png" alt="logo" />
      </div>
      <div className="navBar__right-part">
        <Link to="/home#about" className="link abouta">
          ABOUT
        </Link>
        <Link to="/home#portfolio" className="link portfolioa">
          PORTFOLIO
        </Link>
        <Link to="/blog" className="link bloga">
          BLOG
        </Link>
        <Link to="/home#contact" className="link contacta">
          CONTACT
        </Link>
      </div>
      <MobileNavBar ref={mobileNavBarRef} />
    </motion.div>
  );
};

export default NavBar;
