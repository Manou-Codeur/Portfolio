import "./blog.scss";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    //remove the active class from all nav links
    const navLi = document.querySelectorAll(".link");
    navLi.forEach(li => {
      li.classList.remove("active");
    });
    //add it only to blog link
    navLi[2].classList.add("active");
  }, []);

  return (
    <div className="blog">
      <h1>
        My blog site is <br /> <span className="black">under production !</span>
      </h1>
    </div>
  );
};

export default Blog;
