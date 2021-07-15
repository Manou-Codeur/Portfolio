import "./contact.scss";
import { useRef, useState } from "react";

const Contact = () => {
  const [error, setError] = useState(null);
  const email = useRef();
  const message = useRef();

  const handleOnClick = e => {
    //test if all inputs are filled up
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.current.value === "" || !regx.test(email.current.value)) {
      e.preventDefault();
      setError("Invalid Email!");
    } else if (message.current.value === "") {
      e.preventDefault();
      setError("Fill the message please!");
    } else {
      //send the message
      setError(null);
    }
  };

  return (
    <div id="contact" className="section contact">
      <div className="contact__left-part">
        <h1>
          Let's connect <br />
          <span className="white">digitally.</span>
        </h1>
        <a
          href="https://twitter.com/ayache_salim"
          target="_blank"
          rel="noreferrer"
        >
          Twiter
        </a>
        <a
          href="https://www.linkedin.com/in/ayache-salim-0437511a2/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/khaledbvb09/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://github.com/Manou-Codeur"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <form
        className="contact__right-part"
        action="https://formsubmit.co/ayachesalim06000@gmail.com"
        method="POST"
      >
        <input type="email" name="email" placeholder="Your Email" ref={email} />
        <textarea
          cols="30"
          rows="9"
          placeholder="Your Message"
          ref={message}
          name="textArea"
        ></textarea>
        <button type="submit" onClick={handleOnClick}>
          Send Message
        </button>
        {error && <div className="contact__error">{error}</div>}
      </form>
    </div>
  );
};

export default Contact;
