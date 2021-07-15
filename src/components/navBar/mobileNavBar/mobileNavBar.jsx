import { useState, forwardRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

import "./mobileNavBar.scss";

const MobileNavBar = forwardRef((props, ref) => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleNavBarClose = e => {
    if (e.target.className !== "mobileNavBar__links") setNavBarOpen(false);
  };

  return (
    <div className="mobileNavBar">
      <img
        src="./imgs/menu.svg"
        alt="Open icon"
        className="open"
        onClick={() => setNavBarOpen(true)}
      />

      <AnimatePresence>
        {navBarOpen && (
          <motion.div
            className="mobileNavBar__links"
            ref={ref}
            initial={{ left: "100%", opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            exit={{ left: "100%", opacity: 0 }}
            onClick={handleNavBarClose}
          >
            <img src="./imgs/close.svg" alt="close icon" className="close" />
            <Link to="/home#about">ABOUT</Link>
            <Link to="/home#portfolio">PORTFOLIO</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/home#contact">CONTACT</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default MobileNavBar;
