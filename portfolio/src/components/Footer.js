import React from "react";

const Footer = () => {
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
              <a href="#contact">My Code</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <p className="text-p1">Copyright &#169; 2024 Abraham Varguez. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
