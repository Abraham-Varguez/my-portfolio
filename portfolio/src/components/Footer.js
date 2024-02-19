import React from "react";

const Footer = () => {
  const handleGithub = () => {
    window.open(
      "https://github.com/Abraham-Varguez/my-portfolio",
      "_blank",
      "noopener noreferrer"
    );
  };
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#contact" onClick={handleGithub}>
                Code
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <p className="text-p4">
        Copyright &#169; 2024 Abraham Varguez. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
