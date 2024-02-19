import { React, useState } from "react";
import "../styles/navStyle.css";
import "../styles/mediaQueries.css";
import { IoIosMenu } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

const Nav = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <>
      <nav className="desktop-nav">
        <div className="logo">Abraham Varguez</div>
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
        </ul>
      </nav>
      <nav className="hamburger-nav">
        <div className="logo">Abraham Varguez</div>
        {isClosed ? (
          <IoIosMenu className="nav-icon" onClick={() => setIsClosed(false)} />
        ) : (
          <div className="hamburger-menu">
            <VscChromeClose
              className="nav-icon"
              onClick={() => setIsClosed(true)}
            />
            <ul className="nav-links-hamburger">
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
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
